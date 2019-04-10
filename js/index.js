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
notificationDiv.className = 'notification';

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
		mainNavigation.style.padding = '0 20px';
	} else {
		mainNavigation.style.padding = '0';
	}
});

// Focus 6/10

const nav = document.querySelector('.nav');

nav.addEventListener(
	'focus',
	(event) => {
		event.target.style.background = '#bada55';
		event.target.style.padding = '10px';
	},
	true
);

// Load 7/10

window.addEventListener('load', (event) => {
	const footerContent = document.querySelector('.footer p');
  footerContent.textContent = `Copyright Fun Bus ${new Date().getFullYear()}`
});

// Click 8/10
const contentBtns = document.querySelector('.content-pick');

contentBtns.addEventListener('click', nudge);

function nudge(event) {
	if (Array.from(event.target.classList).includes('btn')) {
		event.target.classList.toggle('nudge');
	}
}

// keydown 9/10
let egg = '';

window.addEventListener('keydown', easterEgg);

function easterEgg(event) {
	egg = egg + event.key;
	if (egg === 'funbus') {
		alert('Fun BUS FTW!');
		window.removeEventListener('keydown', easterEgg);
	} else if (egg.length > 6) {
		window.removeEventListener('keydown', easterEgg);
	}
}

// drag 10/10

const funBusImg = document.querySelector('.intro img');

let dragged;

funBusImg.addEventListener('drag', (event) => {});

funBusImg.addEventListener('dragstart', (event) => {
	dragged = event.target;

	event.target.style.border = '2px solid red';
});

funBusImg.addEventListener('dragend', (event) => {
	event.target.style.border = '';
});

// Example illustrating how to prevent the default action of an a tag on click

nav.addEventListener('click', (event) => {
	if (event.target.className === 'nav-link') {
		event.preventDefault();
	}
});


// Example illustrating how to stop event propagation
const contentSection = document.querySelector('.content-pick');

contentSection.addEventListener('click', colorUpdate);

function colorUpdate(event) {
	event.target.style.background = 'purple';
}

const contentP = document.querySelector('.content-pick p');

contentP.addEventListener('click', colorBorder);

function colorBorder(event) {
	event.target.style.border = '2px solid red';
	event.stopPropagation();
}

// Green Sock Animation
window.addEventListener('load', (event) => {
  TweenMax.from(".logo-heading", 1, {x:-150, y: -100, opacity:0, scale:0.25});
});