// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');
		if (href !== '#' && document.querySelector(href)) {
			e.preventDefault();
			const target = document.querySelector(href);
			target.scrollIntoView({ behavior: 'smooth' });

			// Close mobile menu if open
			const menu = document.querySelector('.nav-menu');
			const hamburger = document.querySelector('.hamburger');
			if (menu && menu.classList.contains('active')) {
				menu.classList.remove('active');
				hamburger.classList.remove('active');
			}
		}
	});
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		navMenu.classList.toggle('active');
	});

	// Close menu on window resize if window is large enough
	window.addEventListener('resize', () => {
		if (window.innerWidth >= 768) {
			hamburger.classList.remove('active');
			navMenu.classList.remove('active');
		}
	});
}

// Sticky nav on scroll
const nav = document.querySelector('.nav');
if (nav) {
	window.addEventListener('scroll', () => {
		if (window.scrollY > 80) {
			nav.classList.add('scrolled');
		} else {
			nav.classList.remove('scrolled');
		}
	});
}

// Active nav link based on scroll position (IntersectionObserver)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
	threshold: 0.3,
	rootMargin: '-80px 0px -70% 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const id = entry.target.getAttribute('id');
			navLinks.forEach(link => {
				link.removeAttribute('aria-current');
				if (link.getAttribute('href') === `#${id}`) {
					link.setAttribute('aria-current', 'true');
				}
			});
		}
	});
}, observerOptions);

sections.forEach(section => {
	observer.observe(section);
});

// Success message handling
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === 'true') {
	// The form was successfully submitted
	// This would typically be handled by Netlify's redirect behavior
	// Show a success notification if desired
	const message = document.createElement('div');
	message.style.cssText = 'position: fixed; top: 2rem; left: 50%; transform: translateX(-50%); background-color: #4CAF50; color: white; padding: 1rem 2rem; border-radius: 4px; z-index: 9999;';
	message.textContent = '✓ Mensaje enviado correctamente. Te contactaremos pronto.';
	document.body.appendChild(message);

	setTimeout(() => {
		message.remove();
		window.history.replaceState({}, document.title, window.location.pathname);
	}, 3000);
}
