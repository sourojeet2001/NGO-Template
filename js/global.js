document.addEventListener('DOMContentLoaded', function () {
  const bannerSlider = document.querySelector('.banner-slider');
  const nav = document.querySelector('nav');
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

  // function navSticky () {
  //   if (isOutOfViewport(nav)) {
  //     nav.classList.add('sticky');
  //   }
  // }


  window.addEventListener('scroll', handleScroll);  
  // window.addEventListener('scroll', navSticky);

  handleScroll();

  navSticky();
});
