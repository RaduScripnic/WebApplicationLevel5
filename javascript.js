let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0; // If we're at the last slide, go back to the first
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // If we're at the first slide, go to the last
    }

    // Move the carousel to the correct position
    document.querySelector('.carousel').style.transform = `translateX(${-currentIndex * 100}%)`;
}
