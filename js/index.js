
const logoHeading = document.querySelector('.logo-heading');

// mouseover event listener 1/10
logoHeading.addEventListener('mouseover', growHeader);

function growHeader(event) {
  event.target.classList.add('hover');
}

// mouseleave event listener 2/10
logoHeading.addEventListener('mouseleave', shrinkHeader);

function shrinkHeader(event) {
  event.target.classList.remove('hover');
}

// dblclick event listener 3/10
logoHeading.addEventListener('dblclick', notifyUser);

const notificationDiv = document.createElement('div');
notificationDiv.innerHTML = "<p>I don't go anywhere!</p>";
notificationDiv.className = "notification";

function notifyUser(event) {
  event.target.appendChild(notificationDiv);
}


// Scroll Event 4/10
const mainNavigation = document.querySelector('.main-navigation');
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 20) {
    mainNavigation.style.opacity = 0.5;
  } else {
    mainNavigation.style.opacity = 1;
  }
});


// Resize 5/10
window.addEventListener('resize', function(event) {
  if (event.target.outerWidth < 1000) {
    mainNavigation.style.padding = "0 20px";
  } else {
    mainNavigation.style.padding = "0";
  }
});

// Focus 6/10

const nav = document.querySelector('.nav');

nav.addEventListener('focus', (event) => {
  event.target.style.background = '#bada55';
  event.target.style.padding = '10px'
}, true); 


// Load 7/10

window.addEventListener('load', (event) => {
  document.querySelector('body').classList.add('loaded');
});


// Click 8/10
const contentBtns = document.querySelector('.content-pick');

contentBtns.addEventListener('click', nudge);

function nudge(event) {
  if (Array.from(event.target.classList).includes("btn")) {
    event.target.classList.toggle("nudge");
  }
  
}
