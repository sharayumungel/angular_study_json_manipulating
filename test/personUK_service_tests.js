describe('Person', function(){
	var PersonUK, visitor;
	beforeEach(module('albumsApp'));
	beforeEach(module(function ($provide){
		visitor = {};
		$provide.value('visitor', visitor);
	}));
	beforeEach(inject(function (_PersonUK_){
		PersonUK = _PersonUK_;
	}));

	describe('#greet', function(){
		it('greets UK visitor formally', function(){
			visitor.country = 'UK';
			expect((new PersonUK('Stephen')).greet()).to.equal('Nice to meet you, Stephen!');
		});

		it('greets others visitors informally', function(){
			visitor.country = 'USA';
			expect((new PersonUK('Jack')).greet()).to.equal('Hey Jack!');
		});
	});
});