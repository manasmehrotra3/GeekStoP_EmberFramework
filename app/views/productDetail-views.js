define([
	'lib/ember/load',
	'plugins/text!app/templates/productDetail.handlebars'
], function(em, productTemplateSource) {

	var ProductView = em.View.extend({
		template: em.Handlebars.compile(productTemplateSource)
		
	});

	// Export them also from the module to be used elsewhere.
	return {
		ProductView: ProductView,
	}
});

