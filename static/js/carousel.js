document.addEventListener('DOMContentLoaded', () => {
  // Check for click events on the navbar burger icon
  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 100000,
  }
  // Initialize all div with carousel class
  console.log('tag')
  var carousels = bulmaCarousel.attach('.carousel', options);
});