$(function () {
  // $(".top__slider").slick({
  //   arrows: false,
  //   dots: true,
  //   autoplay: true,
  //   fade: true,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         dots: false,
  //       },
  //     },
  //   ],
  // });

  $("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
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
    $("body,html").animate({ scrollTop: top }, 1200);
  });

  $(".btn-product").click(function () {
    $('[type="hidden"]').val($(this).data("info"));
  });

  // $(".reviews__slider").slick({
  //   arrows: false,
  //   dots: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1141,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 846,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 585,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // });

  // $(".menu__btn").on("click", function () {
  //   $(".menu__list").toggleClass("menu__list--active");
  // });
});
