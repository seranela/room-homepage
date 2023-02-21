(() => {

let heroIndex = 0;

const button = document.querySelector('.menu-button');
const header = document.querySelector('.header'); // For dark backdrop
const nav = document.querySelector('.nav-header');
const navlist = document.querySelector('.nav-header-list');
const navlinks = document.querySelectorAll('.nav-header-link');
const herolinks = document.querySelectorAll('.link-with-arrow');

const prevButtons = document.querySelectorAll('.button-cycle-previous');
const nextButtons = document.querySelectorAll('.button-cycle-next');
const heroPictures = document.querySelectorAll('.hero-picture');
const heroArticles = document.querySelectorAll('.hero-article');

/* --- Mobile Menu --- */

function resizeUpdate() {
	if (document.body.offsetWidth >= 768) {
		header.classList.remove('dark-backdrop');
		nav.setAttribute('aria-expanded', false);
		nav.classList.remove('nav-header-show');
		navlist.classList.remove('nav-header-list-show');
		button.classList.remove('menu-button-close');
		navlinks.forEach((link) => {
			link.setAttribute('tabindex', '0');
		});
		prevButtons[0].setAttribute('tabindex', '-1');
		prevButtons[1].setAttribute('tabindex', '0');
		nextButtons[0].setAttribute('tabindex', '-1');
		nextButtons[1].setAttribute('tabindex', '0');
	} else {
		navlinks.forEach((link) => {
			link.setAttribute('tabindex', '-1');
		});
		prevButtons[0].setAttribute('tabindex', '0');
		prevButtons[1].setAttribute('tabindex', '-1');
		nextButtons[0].setAttribute('tabindex', '0');
		nextButtons[1].setAttribute('tabindex', '-1');
	}
}

function toggleMenu() {
	if (nav.getAttribute('aria-expanded') === 'false') {
		header.classList.add('dark-backdrop');
		nav.setAttribute('aria-expanded', true);
		nav.classList.add('nav-header-show');
		navlist.classList.add('nav-header-list-show');
		button.classList.add('menu-button-close');
		document.body.style.overflow = 'hidden';
		navlinks.forEach((link) => {
			link.setAttribute('tabindex', '0');
		});
	} else {
		header.classList.remove('dark-backdrop');
		nav.setAttribute('aria-expanded', false);
		nav.classList.remove('nav-header-show');
		navlist.classList.remove('nav-header-list-show');
		button.classList.remove('menu-button-close');
		document.body.style.overflow = 'auto';
		navlinks.forEach((link) => {
			link.setAttribute('tabindex', '-1');
		});
	}
}

window.addEventListener('resize', resizeUpdate);
button.addEventListener('click', toggleMenu);

/* --- Hero Cycler --- */

function cyclePrevious() {
	heroIndex = (heroIndex === 0 ? 2 : heroIndex - 1);
	for (let i = 0; i < heroPictures.length; ++i) {
		heroPictures[i].style.transform = `translateX(${heroIndex * -100}%)`;
		heroArticles[i].style.transform = `translateX(${heroIndex * -100}%)`;
	}
}

function cycleNext() {
	heroIndex = (heroIndex === 2 ? 0 : heroIndex + 1);
	for (let i = 0; i < heroPictures.length; ++i) {
		heroPictures[i].style.transform = `translateX(${heroIndex * -100}%)`;
		heroArticles[i].style.transform = `translateX(${heroIndex * -100}%)`;
	}
}

prevButtons.forEach((button) => {
	button.addEventListener('click', cyclePrevious);
});
nextButtons.forEach((button) => {
	button.addEventListener('click', cycleNext);
});

/* --- Tab Indexing --- */

// Update tab indexing for menu links
resizeUpdate();

// Update tab indexing for links in hero section
for (let i = 0; i < herolinks.length; ++i) {
	if (i === heroIndex) {
		herolinks[i].setAttribute('tabindex', '0');
	} else {
		herolinks[i].setAttribute('tabindex', '-1');
	}
}

})();