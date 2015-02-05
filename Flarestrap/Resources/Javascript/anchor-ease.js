/* 
* Anchor Ease javascript - Animates a scroll of the page to the location of the ID anchor. The offset ensures content 
* is not lost behind top nav bars. This can be extended based on needs of the top nav being 1-2 lines in depth. A typical
* top nav is 50 px. 
*/

$(function() {
			$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			&& location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
			$('html,body').animate({
			scrollTop: target.offset().top - 75 //offsets for fixed header
			}, 1000);
			return false;
			}
			}
			});
	//Executed on page load with URL containing an anchor tag.
			if($(location.href.split("#")[1])) {
			var target = $('#'+location.href.split("#")[1]);
			if (target.length) {
			$('html,body').animate({
			scrollTop: target.offset().top - 75 //offset height of header here too.
			}, 1000);
			return false;
			}
			}
});