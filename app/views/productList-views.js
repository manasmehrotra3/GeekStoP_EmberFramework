define([
	'lib/ember/load',
	'lib/utils',
	'app/controllers/item-controllers',
	'plugins/text!app/templates/productList.handlebars',
	'app/models/item'
], function(em, utils, itemControllers, listTemplateSource, Item) {

			my_book= [{url: 'style/Do not Lose Your Mind, Lose Your Weight.JPG',id: 'Do not Lose Your Mind, Lose Your Weight'}, {url: 'style/The Immortals of Meluha.JPG', id: 'The Immortals of Meluha'}, {url: 'style/The Secret of the Nagas.JPG', id: 'The Secret of the Nagas'}, {url: 'style/Chanakya Chant.JPG', id: 'Chanakya Chant'}, {url: 'style/I have a Dream.JPG', id: 'I have a Dream'}, {url: 'style/The Fountainhead.JPG', id: 'The Fountainhead'}, {url: 'style/Darkly Dreaming Dexter.JPG', id: 'Darkly Dreaming Dexter'}, {url: 'style/The Hobbit.JPG', id: 'The Hobbit'}];
			my_mobile= [{url: 'style/Samsung Galaxy Tab 750.JPG', id: 'Samsung Galaxy Tab 750'},{url: 'style/Motorola Defy (Black).JPG', id: 'Motorola Defy (Black)'},{url: 'style/Samsung Galaxy Note.JPG', id: 'Samsung Galaxy Note'},{url: 'style/Motorola RAZR XT910 (Mercury Silver).JPG', id: 'Motorola RAZR XT910 (Mercury Silver)'},{url: 'style/Sony Ericsson Xperia Arc S (Black).JPG', id: 'Sony Ericsson Xperia Arc S (Black)'},{url: 'style/Samsung Galaxy Ace S5830 (Onyx Black).JPG', id:'Samsung Galaxy Ace S5830 (Onyx Black)'},{url: 'style/HTC Wildfire S (Dark Grey).JPG', id: 'HTC Wildfire S (Dark Grey)'},{url: 'style/Micromax Superfone Lite A75 (Charcoal Black).JPG', id: 'Micromax Superfone Lite A75 (Charcoal Black)'}];

			em.Book = Em.Object.extend({
    			url: null,
    			id: null,
    			price: null,
			});
			
			em.Mobile = Em.Object.extend({
    			url: null,
    			id: null,
			});
			
			em.booksController = Em.ArrayController.create({
    			content: [],
    			initWithDataFromServer: function(hash){
        		var books = hash.map(function(item){
            	return em.Book.create({
                url: item.url,
                id: item.id,
                price: item.price,
                  });
               });
              this.pushObjects(books);
              }
            });
            
            em.mobilesController = Em.ArrayController.create({
    			content: [],
    			initWithDataFromServer: function(hash){
        		var mobiles = hash.map(function(item){
            	return em.Mobile.create({
                url: item.url,
                id: item.id,
                  });
               });
              this.pushObjects(mobiles);
              }
            });

       		em.booksController.initWithDataFromServer(my_book);
			
			em.mobilesController.initWithDataFromServer(my_mobile);
					
			var ListItemsView = em.View.extend({
				template: em.Handlebars.compile(listTemplateSource),
			});
			
			em.ThumbnailPhotoView = em.View.extend({
			   clickHandler: function(evt) {
                 em.MyApp.item.name= event.target.id;
                 em.MyApp.item.url= event.target.src;
                 em.MyApp.get("mainView").productDetail();
                 },	
			});
			
			return {
				ListItemsView: ListItemsView
			}
		}
);

