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
    prevArrow: '<div class="arrow-left"><i class="fa-solid fa-arrow-left"></i></div>',
    nextArrow: '<div class="arrow-right"><i class="fa-solid fa-arrow-right"></i></div>',
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

  // if($(".banner-slider").show()) {
  //   $(".btn-default").hide();
  // }

  // const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  //   const { top, left, bottom, right } = el.getBoundingClientRect();
  //   const { innerHeight, innerWidth } = window;
  //   return partiallyVisible
  //     ? ((top > 0 && top < innerHeight) ||
  //         (bottom > 0 && bottom < innerHeight)) &&
  //         ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
  //     : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  // };


  // console.log(elementIsVisibleInViewport($(".hero-banner")));

  // if(elementIsVisibleInViewport($(".banner-slider"))) {
  //   $(".btn-default").hide();
  // }
});
