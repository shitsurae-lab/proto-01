$("body").on(
  {
    touchstart: function() {
      return $(this).off("mouseover mouseout");
    },
    "touchstart mouseover": function() {
      return $(this).addClass("hover");
    },
    "touchend touchmove mouseout click": function() {
      return $(this).removeClass("hover");
    }
  },
  ".touch-hover"
);
