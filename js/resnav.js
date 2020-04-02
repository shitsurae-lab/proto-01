$(function() {
  $('.Toggle').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.navMenu').addClass('active'); //クラスを付与
    } else {
      $('.navMenu').removeClass('active'); //クラスを外す
    }
  });
  // responsive hamburger_menu
  $('.menu-icons').on('click', function() {
    $(this).toggleClass('active');
    $('.globalMenu').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.l-floating_nav').hide();
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.l-floating_nav').fadeIn();
      } else {
        $('.l-floating_nav').fadeOut();
      }
    });
  });
});
