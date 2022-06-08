$(function () {
  //Fixed Header

  let header = $("#header");
  let intro = $("#intro");
  let introH;
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    scrollPos = $(this).scrollTop();
    introH = intro.innerHeight();
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }

    nav.removeClass("show");
  });

  // Smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    $("html, body").animate({
      scrollTop: elementOffset - 70
    }, 700);
  });


  // Nav Toggle
  let nav = $("#nav");
  let navToggle = $("#navToggle")
  
  navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");
  })

  // Reviews: https://kenwheeler.github.io/slick/
  let slider = $("#reviewsSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false
  });
});
