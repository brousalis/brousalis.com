var i = 0;
$('.items img').clone().appendTo($('#thumbspreload'));
$('.items li img').css('display', 'block');
$('.items li img').each(function() {
  $(this).hide();
  var me = $(this);
  setTimeout(function() {
    $(me).fadeIn(200);
  }, i);
  i += 50;
});
