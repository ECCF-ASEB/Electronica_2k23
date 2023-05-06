// Get all the images and paragraphs
const images = document.querySelectorAll('.training-image');
const descriptions = document.querySelectorAll('.description');

// Add an event listener to each image
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    // Toggle the visibility of the corresponding paragraph
    descriptions[index].classList.toggle('visible');
  });
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
