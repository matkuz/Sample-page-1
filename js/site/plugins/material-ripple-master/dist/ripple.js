// Material Ripple effect
$(".ripple").click(function(event) {
	var surface = $(this);

  	// create .ink wrapper
	// if (surface.find(".ripple-wrapper").length == 0)
    surface.prepend("<div class='ripple-wrapper'><div class='material-ink'></div></div>");

	var ink = surface.find(".material-ink");

  	// in case of quick double clicks stop the previous animation
	// ink.removeClass("animate");

	// set size of .ink
	if (!ink.height() && !ink.width()) {
		// use surface's width or height whichever is larger for
    	// the diameter to make a circle which can cover the entire element
		var d = Math.max(surface.outerWidth(), surface.outerHeight());
		ink.css({height: d, width: d});
	}

	// get click coordinates
	// Logic:
  	// click coordinates relative to page minus
  	// surface's position relative to page minus
  	// half of self height/width to make it controllable from the center
	var x = event.pageX - surface.offset().left - (ink.width() / 2);
	var y = event.pageY - surface.offset().top - (ink.height() / 2);

	var rippleColor = surface.data("ripple-color");

	//set the position and add class .animate
	ink.css({
		top: y + 'px',
		left: x + 'px',
		background: rippleColor
	})
	.addClass("animate")
	.one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(event) { 
		// delete .ripple-wrapper when animation ends
    	$(this).parent().remove();
  	});
});
