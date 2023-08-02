// Menu Icon for Small Screens

function toggleMenu(){
    let menu = document.getElementById("menu");
    let menuIcon = document.getElementById("menu-icon");

    menu.classList.toggle("toggleMenu");

    if (menu.classList.contains("toggleMenu")){
       menuIcon.classList.remove("fa-bars");
       menuIcon.classList.add("fa-xmark");
    }else{
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
}


// Slide show of Specializtions


// Get references to elements
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Show the initial slide
slides[currentIndex].classList.add('active');

// Add event listeners to buttons
prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);

// Function to show the previous slide
function showPreviousSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
}

// Function to show the next slide
function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

