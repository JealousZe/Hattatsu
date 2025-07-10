var slideIndices = [0, 0, 0];
var slideClasses = ["mySlides1", "mySlides2", "mySlides3"];

function showSlides() {
  for (let s = 0; s < slideClasses.length; s++) {
    let slides = document.getElementsByClassName(slideClasses[s]);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndices[s]++;
    if (slideIndices[s] > slides.length) { slideIndices[s] = 1; }
    if (slides.length > 0) {
      slides[slideIndices[s] - 1].style.display = "block";
    }
  }
  setTimeout(showSlides, 4000);
}
showSlides();

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tech-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const content = btn.nextElementSibling;
      btn.classList.toggle('active');
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
});