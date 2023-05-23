const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const menuItems = document.querySelectorAll('.nav__link');
const menuMobileItems = document.querySelectorAll('.nav__mobile-link');
const scrollSpySections = document.querySelectorAll('.section1');


const msgStatus = document.querySelector('.msg-status');


const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	if (navMobile.classList.contains('nav-mobile--active')) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'auto';
	}
};

navBtn.addEventListener('click', handleNav);
menuMobileItems.forEach((li) => li.addEventListener('click', handleNav));

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
    if(document.body.classList.contains('main-page')) {

        const sections = []

        scrollSpySections.forEach(section => {
           

            if(window.scrollY <= section.offsetTop + section.offsetHeight -80) {
				sections.push(section)
				
				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
				
				menuItems.forEach(item => item.classList.remove('nav__link--active'))

				activeSection.classList.add('nav__link--active')
			}

           

        })
    }
}


window.addEventListener('scroll', handleScrollSpy)
