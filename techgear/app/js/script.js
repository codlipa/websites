const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.header__nav');
let open = false;
btn.addEventListener('click', () => {
	if (!open) {
		btn.classList.add('open');
		nav.classList.add('open');
		open = true;
	} else {
		btn.classList.remove('open');
		nav.classList.remove('open');
		open = false;
	}
})

const swiper = new Swiper('.swiper', {
	slidesPerView: 4,
	spaceBetween: 20,
	keyboard: {
	  enabled: true
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	}
})
