$(function () {
  $("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked");
  });
  $(".overlay").click(function () {
    $(this).removeClass("open");
    $(".navBurger").removeClass("active");
  });

  $("#menu, #footer").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $(".btn-product").click(function () {
    $('[type="hidden"]').val($(this).data("info"));
  });
});

var myCarousel = document.querySelector(".carousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
  wrap: true,
  touch: true,
  fade: true,
});
