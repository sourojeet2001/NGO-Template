$(document).ready(function () {
  $(".projects-cards-wrap").slick({
    centerMode: true,
    centerPadding: '60px',
    dots: false,
    arrows: true,
    prevArrow: '<div class="arrow-left"><i class="fa-solid fa-arrow-left" style="color: #f0f2f4;"></i></div>',
    nextArrow: '<div class="arrow-right"><i class="fa-solid fa-arrow-right" style="color: #f7f7f7;"></i></div>',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
