angular
	.module('albumsApp')
	// use Service recipes, which follow 'constructor injection' pattern. Factory recipe doesn't
	// ref: https://docs.angularjs.org/guide/providers
	.service('PersonUK', ['visitor', PersonUK]);

	function PersonUK (visitor) {
		return function PersonUK(name) {
			this.name = name;
			this.greet = function () {
				if (visitor.country === 'UK') {
					return 'Nice to meet you, ' + this.name + '!';
				} else {
					return 'Hey ' + this.name + '!';
				}
			};
		};
	}