describe('Album Service Test', function (){
	var albumService, albums;
	beforeEach(module('albumsApp'));
	beforeEach(inject(function (_albumService_){
		albumService = _albumService_;
	}));

	it('album service to be loaded', function() {
		expect(albumService).to.exist;
	});

	it('albums number shoud be 100', function () {
		console.log('albums: ' + albums);
		//console.log('Album size: ' + albumsSize);
		expect(albumService.fetch_albums_size()).to.equal(100);
	});
});