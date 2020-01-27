$(function () {

  // Fixed Header
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPosition = $(window).scrollTop();

  checkScroll(scrollPosition, introH);


  $(window).on("scroll resize", function () {

    introH = intro.innerHeight();

    scrollPosition = $(this).scrollTop();

    checkScroll(scrollPosition, introH);
  });

  function checkScroll(scrollPosition, introH) {
    if (scrollPosition > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // Smooth scroll

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    console.log(elementOffset);

    $("html, body").animate({
      scrollTop: elementOffset - 70
    }, 1000);
  })



});