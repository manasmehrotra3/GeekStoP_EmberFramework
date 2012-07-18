define([
	'lib/ember/load',
	'lib/utils',
	'app/controllers/item-controllers',
	'plugins/text!app/templates/productList.handlebars',
	'app/models/item'
], function(em, utils, itemControllers, listTemplateSource, Item) {

			var CreateItemView = em.View.extend({
					  click: function(evt) {
					  em.MyApp.get("mainView").productDetail();
					  }
					});
					
			var ListItemsView = em.View.extend({
				contentBooks: ["Do not Lose Your Mind, Lose Your Weight","The Immortals of Meluha","The Secret of the Nagas","Chanakya Chant","I have a Dream","The Fountainhead","Darkly Dreaming Dexter","The Hobbit"],
				contentMobiles: ['Samsung Galaxy Tab 750','Motorola Defy (Black)','Samsung Galaxy Note','Motorola RAZR XT910 (Mercury Silver)','Sony Ericsson Xperia Arc S (Black)','Samsung Galaxy Ace S5830 (Onyx Black)','HTC Wildfire S (Dark Grey)','Micromax Superfone Lite A75 (Charcoal Black)'],
				template: em.Handlebars.compile(listTemplateSource),
			});
			
			em.PhotoListController = em.ArrayProxy.create ({
				content: [],
				selected: null,
			});
			
			em.SelectedPhotoController = em.Object.create ({
				contentBinding: 'em.PhotoListController.selected'
			});
			
			em.myBook = em.Object.create({
                title: 'style/Do not Lose Your Mind, Lose Your Weight.JPG',
            });
            
            em.myMobile = em.Object.create({
                title: 'style/Motorola Defy (Black).JPG',
            });
			
			em.ThumbnailPhotoView = em.View.extend({
			   Books: function() {
			   	    return em.myBook.title
				}.property(),
				
			   Mobiles: function() {
			   	    return em.myMobile.title
				}.property(),
				
               click: function(evt) {
               em.PhotoListController.set('selected', this.get('content'));
               alert(em.PhotoListController.selected);
               //em.MyApp.get("mainView").productDetail();
               },
			});
			
			return {
				CreateItemView: CreateItemView,
				ListItemsView: ListItemsView
			}
		}
);

