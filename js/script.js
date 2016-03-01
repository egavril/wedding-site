$(function() {
  $('.menu a').click(function(event) {
    event.preventDefault();
    var string = $(this).data('string');

    if ($(string).length) {
      $('html, body').animate({scrollTop: $(string).offset().top - 20}, 300);
    } else {
      console.warn('Element does not exist');
    }
  });

  $('input[name="count"]').keyup(function() {
    $('.error').remove();

    var letters = $(this).val().replace(/[\d]/g, '');

    if (letters.length) {
      $(this).after('<span class="error">Only numbers please!</span>');
    }

    var clean = $(this).val().replace(/[\D]/g, '');
    $(this).val(clean);
  });
});