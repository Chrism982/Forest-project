const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');
const navHeight = document.querySelector('.nav').offsetHeight;

const msgStatus = document.querySelector('.msg-status');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
// MESSAGE STATUS
if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success');
	msgStatus.textContent = 'Wiadomość wysłana!';

	setTimeout(() => {
		msgStatus.classList.remove('success');
	}, 3000);
}

if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error');
	msgStatus.textContent = 'Wystąpił błąd.';

	setTimeout(() => {
		msgStatus.classList.remove('error');
	}, 3000);
}

const handleScrollSpy = () => {
	let currentSectionIndex = 0;

	for (let i = 0; i < sections.length; i++) {
		const sectionTop = sections[i].offsetTop - navHeight;
		const sectionHeight = sections[i].offsetHeight;
		const scrollPos = window.scrollY;

		if (scrollPos >= sectionTop - sectionHeight / 3) {
			currentSectionIndex = i;
		}
	}

	navLinks.forEach((link) => {
		link.classList.remove('nav__link--active');
	});

	navLinks[currentSectionIndex].classList.add('nav__link--active');
};

window.addEventListener('scroll', handleScrollSpy);
