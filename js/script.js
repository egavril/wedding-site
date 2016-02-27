$('.link').click(function(e) {
	e.preventDefault();
	var href = $.attr(this, 'href').replace('/', '');
  $('html, body').animate({
    scrollTop: $('.'+ href).offset().top - 20
  }, 500);
});	