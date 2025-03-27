let currentIndex = 0;
console.log("JavaScript file is linked correctly!");
function moveSlide(direction) {
    const slides = document.querySelectorAll(".carousel-slide img");
    const totalSlides = slides.length;
    const carousel = document.querySelector(".carousel");

    currentIndex += direction;

    // Loop back to the first image if we go past the last one
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    // Loop to the last image if we go before the first one
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Adjust the transform property to move the slides
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
