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
				contentMobiles: ['1','2','3','4','5','6','7','8'],
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
             })
			
			em.ThumbnailPhotoView = em.View.extend({
			   Books: function() {
			   	    return em.myBook.title
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

