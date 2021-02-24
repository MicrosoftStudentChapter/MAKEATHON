function showCorrespondingSpeakersOrJudges (button) {
	document.querySelector('#speakers_and_judges .speakers').style.display = "none";
	document.querySelector('#speakers_and_judges .judges').style.display = "none";
	document.querySelector(`#speakers_and_judges ${button.getAttribute('data-show')}`).style.display = "block";
}
