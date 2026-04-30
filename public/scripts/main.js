// Smooth scroll for anchor links (hash-only hrefs like #section)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');
		if (href !== '#' && document.querySelector(href)) {
			e.preventDefault();
			const target = document.querySelector(href);
			target.scrollIntoView({ behavior: 'smooth' });

			// Close mobile menu if open
			const menu = document.querySelector('.nav-menu');
			const btn = document.querySelector('.hamburger');
			if (menu && menu.classList.contains('active')) {
				menu.classList.remove('active');
				if (btn) {
					btn.classList.remove('active');
					btn.setAttribute('aria-expanded', 'false');
				}
			}
		}
	});
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
	hamburger.addEventListener('click', () => {
		const isOpen = hamburger.classList.toggle('active');
		navMenu.classList.toggle('active');
		hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth >= 768) {
			hamburger.classList.remove('active');
			navMenu.classList.remove('active');
			hamburger.setAttribute('aria-expanded', 'false');
		}
	}, { passive: true });
}

// Nav darkens on scroll
const nav = document.querySelector('.nav');
if (nav) {
	// Apply correct state immediately on load (handles direct hash links)
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
