document.querySelectorAll("#faq .accordion").forEach((element) => {
	element.addEventListener("click", function () {
		this.classList.toggle("active");
		let panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
});

document.querySelectorAll('#faq .faq-category-button').forEach(element => {
	element.addEventListener('click', function () {
		let faq = document.querySelector('#faq');

		let prevOpenedFaq = faq.querySelector('.current');
		faq.querySelector(prevOpenedFaq.getAttribute('data-toggle')).style.display = 'none';
		prevOpenedFaq.classList.remove('current');

		this.classList.add('current');
		faq.querySelector(this.getAttribute('data-toggle')).style.display = 'block';
	});
});
