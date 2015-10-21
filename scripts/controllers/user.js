angular
	.module('albumsApp')
	.controller('userCtrl', ['$scope', 'albumService', userController]);


function userController($scope, albumService){
	albumService.fetch_all_users().success(function(users){
		$scope.users = this.users = users;
	});

	$scope.sortField = "id";
	$scope.sortField = "name";
	$scope.reverse = true;
}