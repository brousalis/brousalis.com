var i = 0;
$('ul#thumbs li img').clone().appendTo($('#thumbspreload'));
$('ul#thumbs li img').css('display', 'block');
$('ul#thumbs li img').each(function() {
  $(this).hide();
  var me = $(this);
  setTimeout(function() {
    $(me).fadeIn(200);
  }, i);
  i += 50;
});
