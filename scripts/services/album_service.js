angular
	.module('albumsApp')
	.factory('albumService', albumService);

function albumService($http){
	return {
		fetch_all_albums: function(){
				return $http.get('http://jsonplaceholder.typicode.com/albums');
			},	

		fetch_albums_size: function(){
				$http.get('http://jsonplaceholder.typicode.com/albums').success(function (albums){
					return albums.length;
				});
			},	

		fetch_all_users: function(){
				return $http.get('http://jsonplaceholder.typicode.com/users');
			},

		fetch_all_photos: function(){
				return $http.get('http://jsonplaceholder.typicode.com/photos');
			},

		id_to_name: function(albums, users){
				angular.forEach(albums, function(album){
						var userName = _.select(users, function(u){
							return u.id === album.userId;
						})[0].name;
						album.userId = userName;
					});
			},

		add_photo_urls: function(albums, photos){
				angular.forEach(albums, function(album){
						var matchedPhoto = _.select(photos, function(p){
							return p.albumId === album.id;
						})[0];

						var thumbnailUrl = matchedPhoto.thumbnailUrl;

						var url = matchedPhoto.url;

						// add key/value
						album['thumbnailUrl'] = thumbnailUrl;
						album['url'] = url;
				});
			}
		};
}