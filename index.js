const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Frontend Devloper", "Python developer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// hide active navbar item when clicked
const navItems = document.querySelectorAll('.menu li');
navItems.forEach(function(navItem) {
  navItem.addEventListener('click', function() {
    navbar.classList.remove('active');
  });
});
// select the navbar element

// get the height of the navbar
const navbarHeight = navbar.offsetHeight;

// add an event listener for scrolling the window
window.addEventListener('scroll', function() {
  // get the current scroll position
  const scrollPosition = window.scrollY;

  // check if the scroll position is greater than or equal to the navbar height
  if (scrollPosition >= navbarHeight) {
    // add a class to the navbar element to make it sticky
    navbar.classList.add('fixed');
  } else {
    // remove the class from the navbar element
    navbar.classList.remove('fixed');
  }

  // check if the scroll position is greater than or equal to 100 pixels
  if (scrollPosition >= 100) {
    // add a class to the navbar element to change its background color
    navbar.classList.add('dark');
  } else {
    // remove the class from the navbar element
    navbar.classList.remove('dark');
  }
});

// code for the gradully increase in progress bar
// Get all the progress bars
const progressBars = document.querySelectorAll('.filled_Bar');

// Define the target widths for each progress bar in an array
const targetWidths = [90, 90, 40, 80 , 80]; // in percentage

// Define the duration of the animation in milliseconds
const animationDuration = 1000;

// Define the interval time between each frame of the animation in milliseconds
const interval = 10;

// Calculate the amount to increase the width of each progress bar on each frame
const increments = targetWidths.map(targetWidth => targetWidth / (animationDuration / interval));

// Set the initial widths of the progress bars to 0
let widths = new Array(targetWidths.length).fill(0);

// Define a function to update the width of each progress bar on each frame
function updateWidths() {
  // Loop through each progress bar
  progressBars.forEach((progressBar, index) => {
    // Increase the width of the progress bar by the corresponding increment value
    widths[index] += increments[index];

    // Update the progress bar with the new width
    progressBar.style.width = `${widths[index]}%`;
  });

  // If any of the progress bars have not yet reached their target width, call this function again on the next frame
  if (widths.some((width, index) => width < targetWidths[index])) {
    requestAnimationFrame(updateWidths);
  }
}

// Start the animation by calling the updateWidths function
// Define a function to check if the section is visible on the user's screen
function isSectionVisible(section) {
  const sectionRect = section.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  return (
    sectionRect.top >= 0 &&
    sectionRect.bottom <= (viewportHeight || document.documentElement.clientHeight)
  );
}

// Define an IntersectionObserver to trigger the animation when the section is visible on the user's screen
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Start the animation by calling the updateWidths function
      updateWidths();
      // Stop observing the section to avoid triggering the animation again
      sectionObserver.unobserve(entry.target);
    }
  });
});

// Get the section element that contains the progress bars
const section = document.querySelector('.languages');

// Observe the section element with the IntersectionObserver
sectionObserver.observe(section);