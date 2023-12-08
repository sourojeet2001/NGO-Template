document.addEventListener('DOMContentLoaded', function () {
  const bannerSlider = document.querySelector('.banner-slider');
  const aside = document.querySelector('aside');

  function isOutOfViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom < 0 ||
      rect.right < 0 ||
      rect.left > window.innerWidth ||
      rect.top > window.innerHeight
    );
  }

  function handleScroll() {
    if (isOutOfViewport(bannerSlider)) {
      aside.style.display = 'block';
    } 
    else {
      aside.style.display = 'none';
    }
  }
  window.addEventListener('scroll', handleScroll);

  handleScroll();
});


$(document).ready(function () {
  function updateBackgroundImage(element) {
    let img = document.querySelector(element);
    let style = img.currentStyle || window.getComputedStyle(img, false);
    let bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");

    var url = new URL(bi);
    var pathname = url.pathname;
    var parts = pathname.split('/');
    var assetsIndex = parts.indexOf('assets');
    var result = parts.slice(assetsIndex + 1).join('/');
    var imgUrl = "../../assets/" + result;
    console.log("url(" + imgUrl + ")");
    document.querySelector("nav").style.backgroundImage = "url(" + imgUrl + ")";
    document.querySelector("nav").style.backgroundSize = "cover";
  }
  updateBackgroundImage(".hero-banner");

  $('.slick-slider').on('afterChange', function (event, slick, currentSlide) {
    var dataId = $('.slick-current').attr("data-slick-index");
    if(dataId != 0) {
      updateBackgroundImage(".hero-banner"+dataId);
    }
    else {
      updateBackgroundImage(".hero-banner");
    }   
  });
});