$(document).ready(function () {
  $(".banner-slider").slick({
    infinite: !1,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: !0,
    cssEase: "linear",
    // focusOnSelect: false,
    // fade: true,
    // autoplay: true,
    prevArrow:
      '<div class="arrow-left"><i class="fa-solid fa-arrow-left"></i></div>',
    nextArrow:
      '<div class="arrow-right"><i class="fa-solid fa-arrow-right"></i></div>',
    responsive: [
      { 
        breakpoint: 1920,
        settings: { 
          slidesToShow: 1 
        } 
      },
      { 
        breakpoint: 992, 
        settings: { 
          slidesToShow: 1 
      } 
    },
      { 
        breakpoint: 575, 
        settings: { 
        slidesToShow: 1,
        arrows: false, 
      } 
    },
    ],
  });
});
