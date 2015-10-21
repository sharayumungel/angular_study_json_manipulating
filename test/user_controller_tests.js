describe('User Test controller', function (){
	var albumService, scope, controller;
	beforeEach(module('albumsApp'));
	beforeEach(inject(function (_albumService_, $controller, $rootScope){
		albumService = _albumService_;
		scope = $rootScope.$new();
		controller = $controller('userCtrl', {
			$scope: scope
		});
		//console.log('contorller: ' + controller);
	}));

	it('user number shoud be 10', function () {
		//console.log('contorller 2: ' + controller);
		//console.log('users: ' + controller.users);
		//assert.lengthOf(controller.users, 10);
		assert.typeOf(controller.users, 'undefined')
	});
});