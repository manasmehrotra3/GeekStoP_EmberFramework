
define([
	'jquery',
	'lib/ember/load',
	'app/models/user'
], function($, em, User) {

	var MainView = em.ContainerView.extend({
		switchView: function(view) {
			var childViews = this.get("childViews");
			childViews.popObject();
			childViews.pushObject(view);
		},

		logout: function() {
			var access = em.MyApp.get("AccessView").create();
			em.MyApp.set("user", User.create({name: ""}));
			this.switchView(access);
		},

		login: function() {
			var access = em.MyApp.get("ListItemsView").create();
			this.switchView(access);
		},
		
		productDetail: function() {
			var product = em.MyApp.get("ProductView").create();
			this.switchView(product);
		}
		
	});

	return {
		MainView: MainView
	}

});

