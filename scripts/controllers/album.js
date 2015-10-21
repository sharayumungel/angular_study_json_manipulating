angular
	.module('albumsApp')
	.controller('albumCtrl', albumCtrl);


	function albumCtrl($scope, albumService){
		albumService.fetch_all_albums().success(function(albums){
			albumService.fetch_all_users().success(function(users){
				// get user's name
				albumService.id_to_name(albums, users);
			});

			albumService.fetch_all_photos().success(function(photos){
				// get album's image urls
				albumService.add_photo_urls(albums, photos);
			});

			$scope.albums = albums;
			$scope.albumsQuantity = albums.length;
		});
		$scope.sortField = "id";
		$scope.sortField = "userId";
		$scope.reverse = true;

		this.getAblumsQuantity = function() {
			return $scope.albumsQuantity;
		};
	}