$(document).ready(function () {
  $(".projects-cards-wrap").slick({
    centerMode: true,
    centerPadding: '60px',
    dots: false,
    arrows: true,
    infinite: true,
    prevArrow: '<div class="arrow-left"><i class="fa-solid fa-arrow-left" style="color: #f0f2f4;"></i></div>',
    nextArrow: '<div class="arrow-right"><i class="fa-solid fa-arrow-right" style="color: #f7f7f7;"></i></div>',
    slidesToShow: 3,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    // variableWidth: false,
    responsive: [
      { 
        breakpoint: 1920, 
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '60px',
          arrows: false,
        }
      }
    ]
  });
});
