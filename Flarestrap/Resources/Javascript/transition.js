$(function() {
			var primaryNavigation = $("nav.header");
			var interiorHeadingImage = $('.interior-heading');
			var landingHeadingImage = $('.landing-heading');

			var goTransparent = function(){
				primaryNavigation.addClass('isTransparent');
				primaryNavigation.animate({'backgroundColor': 'rgba(11, 126, 190, 0.0)'}, 'slow');
			};

			var goColored = function(){
				primaryNavigation.removeClass('isTransparent');
				primaryNavigation.animate({'backgroundColor': 'rgba(11, 126, 190, 0.9)'}, 'slow');
			};

			var doTransitionCheck = function(isFirstLoad, elementToCheckHeight, fixedHeight) {
				var scroll = $(window).scrollTop();

				var heightToCheck = fixedHeight ? fixedHeight : elementToCheckHeight ? elementToCheckHeight.height() - 40 : 0;
				
				if (scroll <= heightToCheck){
					if (isFirstLoad){
						goTransparent();
					} else if (!primaryNavigation.hasClass('isTransparent')){
						goTransparent();
					}
				} else if (scroll > heightToCheck){
					if (isFirstLoad){
						goColored();
					} else if (primaryNavigation.hasClass('isTransparent')){
						goColored();
					}
				}
			};

			if (interiorHeadingImage || landingHeadingImage) {
				doTransitionCheck(true, interiorHeadingImage, landingHeadingImage.length > 0 ? 310 : null);

				$(window).scroll(function () {
					doTransitionCheck(false, interiorHeadingImage, landingHeadingImage.length > 0 ? 310 : null);
				});
			}
		});