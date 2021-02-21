// Open Modal

function showModal(clickedButton) {
	let eventInfo = clickedButton.innerHTML;
	let eventDate = clickedButton.parentNode.parentNode.querySelector(".event-date").innerHTML;
	let eventDetails = clickedButton.parentNode.parentNode.querySelector(".event-detail").innerHTML;

	let modal = document.querySelector("#timeline + .event-modal");

	modal.querySelector(".event-info").innerHTML = eventInfo;
	modal.querySelector(".event-date").innerHTML = eventDate;
	modal.querySelector(".event-details").innerHTML = eventDetails;
	modal.classList.add("show");
}

function closeModal() {
	document.querySelector("#timeline + .event-modal").classList.remove("show");
}

let htmlDOM = document.querySelector("html");
let eventsDiv = document.querySelector("#timeline .right-container");

function scrollTimeline() {
	eventsDiv.scrollTop = (1.2 * htmlDOM.scrollTop) % (eventsDiv.scrollHeight - eventsDiv.clientHeight + 1);
}

