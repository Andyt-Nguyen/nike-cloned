NikeApp.directive('slider', function(){
	return {
		templateUrl: "./views/elementTemplates/slider.html",
		link: function(sco, ele, attri){
				$('.carousel').flickity();
		}
	}
})
