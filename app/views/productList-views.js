define([
	'lib/ember/load',
	'lib/utils',
	'app/controllers/item-controllers',
	'plugins/text!app/templates/productList.handlebars',
	'app/models/item'
], function(em, utils, itemControllers, listTemplateSource, Item) {

			my_data= [{url: 'style/Do not Lose Your Mind, Lose Your Weight.JPG',id: 'Do not Lose Your Mind, Lose Your Weight'}, {url: 'style/The Immortals of Meluha.JPG', id: 'The Immortals of Meluha'}, {url: 'style/The Secret of the Nagas.JPG', id: 'The Secret of the Nagas'}, {url: 'style/Chanakya Chant.JPG', id: 'Chanakya Chant'}, {url: 'style/I have a Dream.JPG', id: 'I have a Dream'}, {url: 'style/The Fountainhead.JPG', id: 'The Fountainhead'}, {url: 'style/Darkly Dreaming Dexter.JPG', id: 'Darkly Dreaming Dexter'}, {url: 'style/The Hobbit.JPG', id: 'The Hobbit'}];

			em.User = Em.Object.extend({
    			url: null,
    			id: null,
			});
			
			em.usersController = Em.ArrayController.create({
    			content: [],
    			initWithDataFromServer: function(hash){
        		var users = hash.map(function(item){
            	return em.User.create({
                url: item.url,
                id: item.id,
                  });
               });
              this.pushObjects(users);
              }
            });

       		em.usersController.initWithDataFromServer(my_data);
			
			
					
			var ListItemsView = em.View.extend({
				contentMobiles: ['Samsung Galaxy Tab 750','Motorola Defy (Black)','Samsung Galaxy Note','Motorola RAZR XT910 (Mercury Silver)','Sony Ericsson Xperia Arc S (Black)','Samsung Galaxy Ace S5830 (Onyx Black)','HTC Wildfire S (Dark Grey)','Micromax Superfone Lite A75 (Charcoal Black)'],
				template: em.Handlebars.compile(listTemplateSource),
			});
			
			em.ThumbnailPhotoView = em.View.extend({
			   edit: function(evt) {
                 em.MyApp.item.name= event.target.id;
                 em.MyApp.get("mainView").productDetail();
                 },	
			});
			
			return {
				ListItemsView: ListItemsView
			}
		}
);

