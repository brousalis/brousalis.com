jQuery(document).ready(function() {

  // jquery masonry
	var $wall = jQuery('#masonry');
	$wall.masonry({
		columnWidth: 380,
		animate: true,
    animationOptions: {
			duration: 500,
			easing: 'easeInOutCirc',
			queue: false
		},
		itemSelector: '.item'
	});

  // .item hover
  var $item = jQuery('.item');
  $item.hover(function (){
    $item.find('.title h1 a').css("color", "#fff");
  }, function (){
    $item.find('.title h1 a').css("color", "#aaa");
  });

  // back to top link
	var topLink = jQuery('#back-to-top');
	function tz_backToTop(topLink) {
		if(jQuery(window).scrollTop() > 0) {
			topLink.fadeIn(200);
		} else {
			topLink.fadeOut(200);
		}
	}
	
	jQuery(window).scroll( function() {
		tz_backToTop(topLink);
	});
	
	topLink.find('a').click( function() {
		jQuery('html, body').stop().animate({scrollTop:0}, 500);
		return false;
	});
  
});

