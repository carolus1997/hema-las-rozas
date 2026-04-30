// Helper: close mobile menu and unlock body scroll
function closeMobileMenu() {
	const hamburger = document.querySelector('.hamburger');
	const navMenu = document.querySelector('.nav-menu');
	if (hamburger && navMenu) {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
		hamburger.setAttribute('aria-expanded', 'false');
		document.body.style.overflow = '';
	}
}

// Smooth scroll for pure hash links (#section)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');
		if (href !== '#' && document.querySelector(href)) {
			e.preventDefault();
			document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
			closeMobileMenu();
		}
	});
});

// Close menu on any nav link click (handles /#hash and /page links too)
document.querySelectorAll('.nav-menu .nav-link').forEach(link => {
	link.addEventListener('click', closeMobileMenu);
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
	hamburger.addEventListener('click', () => {
		const isOpen = hamburger.classList.toggle('active');
		navMenu.classList.toggle('active');
		hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
		document.body.style.overflow = isOpen ? 'hidden' : '';
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth >= 768) {
			closeMobileMenu();
		}
	}, { passive: true });
}

// Nav darkens on scroll
const nav = document.querySelector('.nav');
if (nav) {
	if (window.scrollY > 80) nav.classList.add('scrolled');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 80) {
			nav.classList.add('scrolled');
		} else {
			nav.classList.remove('scrolled');
		}
	}, { passive: true });
}

// Success message for contact form submission
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === 'true') {
	const message = document.createElement('div');
	message.style.cssText = 'position:fixed;top:2rem;left:50%;transform:translateX(-50%);background-color:#1a7a3c;color:#fff;padding:1rem 2rem;border-radius:4px;z-index:9999;font-family:sans-serif;';
	message.textContent = '✓ Mensaje enviado correctamente. Te contactaré pronto.';
	document.body.appendChild(message);

	setTimeout(() => {
		message.remove();
		window.history.replaceState({}, document.title, window.location.pathname);
	}, 4000);
}
