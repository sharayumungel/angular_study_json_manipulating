angular
	.module('albumsApp')
	.factory('personService', personService);

function personService () {
    return function Person(name) {
        this.name = name;
    };
}	
