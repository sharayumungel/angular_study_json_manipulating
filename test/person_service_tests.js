describe('Person', function () {

  var Person;
  beforeEach(module('albumsApp'));
  beforeEach(inject(function (personService) {
    Person = personService;
  }));

  describe('Constructor', function () {

    it('assigns a name', function () {
      expect(new Person('Ben')).to.have.property('name', 'Ben');
    });

  }); 

});