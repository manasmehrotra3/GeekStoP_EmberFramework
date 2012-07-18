
define([
	'lib/ember/load',
	'app/models/user',
	'app/models/item',
	"app/views/main-views",
	"app/views/access-views",
	"app/views/productList-views",
	"app/views/productDetail-views"
], function(em, User, Item, mainViews, accessViews, itemViews, productViews) {

	var user = User.create();

	// Create a local namespace for the app
	var MyApp = em.Application.create({
		VERSION: "0.0.1",
		user: User.create({
			name: "",
			title: "",
			email: "",
			address: "",
			city: "",
			state: "",
			zip: "",
		}),
		
		item: Item.create({
			name: "",
		})	
	});

	// Instantiate the main view
	var mainView = mainViews.MainView.create();
	mainView.appendTo("#app");
	MyApp.set("mainView", mainView);
	var accessView = accessViews.AccessView.create();
	mainView.switchView(accessView);
	var productView= productViews.ProductView.create();
	

	// Expose the views to the handlebars templates
	MyApp.set("AccessView", accessViews.AccessView);
	MyApp.set("AccessButton", accessViews.AccessButton);
	MyApp.set("UsernameField", accessViews.UsernameField);
	MyApp.set("CreateItemView", itemViews.CreateItemView);
	MyApp.set("ListItemsView", itemViews.ListItemsView);
	MyApp.set("ProductView", productViews.ProductView);

	// Add the application's namespace to Ember so we can access it
	// from within handlebars templates.
	em.MyApp = MyApp;

	// Export it from the module.
	return MyApp;

});

