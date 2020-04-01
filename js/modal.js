$(function() {
  $('.js-modal').hide();
  $('.js-modal-open').on('click', function() {
    $('.js-modal')
      .fadeIn()
      .toggleClass('active');
    return false;
  });
  $('.js-modal-close').on('click', function() {
    $('.js-modal').fadeOut();
    return false;
  });
});
