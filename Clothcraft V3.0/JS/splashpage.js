const authText = document.querySelector(".auth-text");
const authVideo = document.querySelector(".auth-video");
const contactInfo = document.querySelector(".contact-info");
const contactForm = document.querySelector(".contact-form");

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let current = 0;
let interval;

/* SHOW SLIDE */
function showSlide(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");

    current = index;

    slides[current].classList.add("active");
    dots[current].classList.add("active");
}

/* AUTO NEXT */
function showNextSlide() {
    let next = (current + 1) % slides.length;
    showSlide(next);
}

/* CLICK DOT */
function goToSlide(index) {
    showSlide(index);

    // reset timer (so it doesn't instantly change)
    clearInterval(interval);
    interval = setInterval(showNextSlide, 4000);
}

/* START AUTO SLIDE */
interval = setInterval(showNextSlide, 4000);

const videoContainer = document.querySelector(".video-container");
const conceptText = document.querySelector(".concept-text");

window.addEventListener("scroll", () => {
    let sectionTop = videoContainer.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
        videoContainer.classList.add("show");
        conceptText.classList.add("show");
    }
});
window.addEventListener("scroll", () => {
    let triggerPoint = window.innerHeight;

    // existing
    let sectionTop = videoContainer.getBoundingClientRect().top;

    if (sectionTop < triggerPoint - 100) {
        videoContainer.classList.add("show");
        conceptText.classList.add("show");
    }

    // NEW SECTION
    let authTop = authText.getBoundingClientRect().top;

    if (authTop < triggerPoint - 100) {
        authText.classList.add("show");
        authVideo.classList.add("show");
    }
});
window.addEventListener("scroll", () => {
    let trigger = window.innerHeight;

    let contactTop = contactInfo.getBoundingClientRect().top;

    if (contactTop < trigger - 100) {
        contactInfo.classList.add("show");
        contactForm.classList.add("show");
    }
});