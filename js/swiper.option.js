// $(document).ready(function() {
$(function() {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    speed: 1000,
    delay: 1000,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoHeight: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });
});
