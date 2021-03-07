/******************************************************************
 * Smooth Scroll
 *******************************************************************/

$("#nav-items")
	.find("a")
	.click(function (e) {
		e.preventDefault();
		let section = $(this).attr("href");
		if (section[0] == '#') {
			$("html, body").animate({ scrollTop: $(section).offset().top });
		} else {
			window.open(this.href, '__blank')
		}
	});

/******************************************************************
 * Timer
 *******************************************************************/

const countDownDate = new Date("Mar 5, 2021 17:00:00").getTime();

updateTimer();

function updateTimer() {
	let timerTag = document.querySelector("#home #timer");
	timerTag.innerHTML = createInnerHTML(String(getTimeLeftInSeconds()));

	let timerUpdator = setInterval(() => {
		let timeLeft = getTimeLeftInSeconds();
		timeLeft = timeLeft > 0 ? String(timeLeft) : "STARTED!";

		timerTag.innerHTML = createInnerHTML(timeLeft);

		if (timeLeft === "STARTED!") {
			clearInterval(timerUpdator);
		}
	}, 1000);
}

function getTimeLeftInSeconds() {
	let presentTime = new Date().getTime();
	let timeLeft = Math.floor((countDownDate - presentTime) / 1000);
	return timeLeft > 0 ? timeLeft : "0";
}

function createInnerHTML(x) {
	let stringInTimer = "";

	for (let i = 0; i < x.length; i++) {
		stringInTimer += `<span class="timer-digit"><span timer-digit="${x[i]}">${x[i]}</span></span>`;
	}

	return stringInTimer;
}

/******************************************************************
 * Navbar
 *******************************************************************/

function toggleNavbar() {
	let navbar = document.querySelector("#home header nav");
	let navbarTogglerButton = document.querySelector(
		"#home button#navbar-toggler"
	);

	if (navbar.classList.length == 0) {
		navbar.classList.add("show-navbar");
		navbarTogglerButton.classList.add("on");
	} else if (navbar.classList.contains("hide-navbar")) {
		navbar.classList.remove("hide-navbar");
		navbar.classList.add("show-navbar");
		navbarTogglerButton.classList.add("on");
	} else if (navbar.classList.contains("show-navbar")) {
		navbar.classList.remove("show-navbar");
		navbar.classList.add("hide-navbar");
		navbarTogglerButton.classList.remove("on");
	}
}

/******************************************************************
 * Navbar Safari Specific
 *******************************************************************/

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
	document
		.querySelectorAll("#home nav #nav-items a span")
		.forEach((element) => {
			element.classList.add("safari-only");
		});
}

/******************************************************************
 * Video Audio
 *******************************************************************/

let muteButton = document.querySelector("#home .mute-button");

muteButton.onclick = () => {
	let homeBgVideo = document.querySelector("video#home-bg-video");

	homeBgVideo.muted = !homeBgVideo.muted;

	if (homeBgVideo.muted) {
		muteButton.innerHTML = '<i class="bx bx-volume-mute"></i>';
	} else {
		muteButton.innerHTML = '<i class="bx bx-volume-full"></i>';
	}
};

// Toggle Mute Video
document.onkeypress = (ev) => {
	if (ev.key.toLowerCase() === "m") {
		muteButton.onclick();
	}
};

/******************************************************************
 * Rule Book
 *******************************************************************/
function openRuleBook() {
	document.querySelector('#rule-book').classList.add('show-rule-book')
}

