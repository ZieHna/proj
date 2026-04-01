document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const images = document.querySelectorAll(".carousel img");

    let index = 0;
    const visible = 3;

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
    const buttons = document.querySelectorAll(".arrow-btn");
    buttons[0].addEventListener("click", prevSlide);
    buttons[1].addEventListener("click", nextSlide);
});

// GRID CAROUSEL
const gridCarousel = document.getElementById("gridCarousel");
const gridImages = document.querySelectorAll(".grid-carousel img");

let gridIndex = 0;
const gridVisible = 3;

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

const gridBtns = document.querySelectorAll(".grid-btn");

gridBtns[0].addEventListener("click", prevGrid);
gridBtns[1].addEventListener("click", nextGrid);