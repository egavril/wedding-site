$('#rsvp').click(function(e) {
	e.preventDefault();
	var href = $.attr(this, 'href').replace('/', '');
 	$('html, body').animate({scrollTop: $('.'+ href).offset().top - 20}, 500);
});	

/*

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

*/