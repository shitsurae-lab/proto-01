$(function() {
  $('.def-list dd').hide();
  $('.def-list dt').on('click', function() {
    $(this)
      .next()
      .slideToggle();
  });

  $('.l-aside__def dd').hide();
  $('.l-aside__def dt').on('click', function() {
    $(this)
      .next()
      .slideToggle();
  });

  $('.l-aside__list--sibling').hide();
  $('.l-aside__list--child').on('click', function() {
    $(this)
      .next()
      .slideToggle();
  });

  $('.l-aside__list--sibling li').on('click', function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
    $(this)
      .parents()
      .prev()
      .addClass('active');
  });
});
