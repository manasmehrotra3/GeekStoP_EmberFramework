
define([
	'lib/ember/load'
], function(em) {

	return em.Object.extend({
		name: "",
		title: "",
		email: "",
		address: "",
		city: "",
		state: "",
		zip: "",
	});

});

