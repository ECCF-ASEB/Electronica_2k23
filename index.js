setTimeout(function() {
  // Set new image as the background
  var body = document.querySelector('body');
  body.style.backgroundImage = 'url("electronics.jpg")';
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundSize = 'cover';

  // Fade out the old image and replace it with the new image
  var image = document.querySelector('.cb-slideshow ');
  image.style.transition = 'opacity 1s';
  image.style.opacity = '0';
  setTimeout(function() {
    image.style.display = 'none';
    var newImage = document.createElement('li');
    newImage.innerHTML = '<img src="electronics.jpg" alt="Second GIF" style="height: 100pxD:\swathi\WebDevelopment\Electronica\TechFest-master\electronics.jpg;">'; // Set height of new image
    var slideshow = document.querySelector('.cb-slideshow');
    slideshow.insertBefore(newImage, slideshow.firstChild);
    setTimeout(function() {
      newImage.style.opacity = '0.5';
    }, 100);
  }, 1000);

  // Bring the .container-3 element to the front layer
  var container = document.querySelector('.container-3');
  setTimeout(function() {
    container.style.transition = 'opacity 1s';
    container.style.opacity = '1';
    container.style.zIndex = '1';
  }, 2000);

}, 3000);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var texts = document.getElementsByClassName("slide-text");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    texts[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  texts[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("fade"); // Add CSS animation class
  setTimeout(function() {
    slides[slideIndex - 1].classList.remove("fade"); // Remove CSS animation class
    showSlides();
  }, 5000); // Change image every 5 seconds
}
