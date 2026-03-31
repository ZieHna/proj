document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const images = document.querySelectorAll(".carousel img");

    let index = 0;
    const visible = 4;

    function updateSlide() {
        const imgWidth = images[0].offsetWidth + 20;
        carousel.style.transform = `translateX(-${index * imgWidth}px)`;
    }

    function nextSlide() {
        if (index < images.length - visible) {
            index++;
            updateSlide();
        }
    }

    function prevSlide() {
        if (index > 0) {
            index--;
            updateSlide();
        }
    }

    // 🔥 MAKE BUTTONS WORK (BEST METHOD)
    document.querySelector(".arrow.right").addEventListener("click", nextSlide);
    document.querySelector(".arrow.left").addEventListener("click", prevSlide);
});

// GRID CAROUSEL
const gridCarousel = document.getElementById("gridCarousel");
const gridImages = document.querySelectorAll(".grid-carousel img");

let gridIndex = 0;
const gridVisible = 4;

function updateGrid() {
    const imgWidth = gridImages[0].offsetWidth + 30;
    gridCarousel.style.transform = `translateX(-${gridIndex * imgWidth}px)`;
}

function nextGrid() {
    if (gridIndex < gridImages.length - gridVisible) {
        gridIndex++;
        updateGrid();
    }
}

function prevGrid() {
    if (gridIndex > 0) {
        gridIndex--;
        updateGrid();
    }
}

// attach events
document.querySelector(".grid-arrow.right").addEventListener("click", nextGrid);
document.querySelector(".grid-arrow.left").addEventListener("click", prevGrid);