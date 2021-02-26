function showCorrespondingSpeakersOrJudges (button) {
	document.querySelectorAll('#speakers_and_judges .speakers-judges-container > div').forEach(element => {
		element.style.display = "none";
	});

	document.querySelectorAll('#speakers_and_judges .selector > button').forEach(element => {
		element.style.backgroundColor = '#ffffff50'
	});

	button.style.backgroundColor = '#ffffff90'

	document.querySelector(`#speakers_and_judges ${button.getAttribute('data-show')}`).style.display = "block";
}

function showCorrespondingSpeakerOrJudge(button) {
	let speakerOrJudgeInfoContaier = document.querySelector('#speakers_and_judges .speakers-judges-container .speaker-or-judge-info')

	speakerOrJudgeInfoContaier.querySelector('.name').innerHTML = button.querySelector('.name').innerHTML;
	speakerOrJudgeInfoContaier.querySelector('img').src = button.querySelector('img').src;
	speakerOrJudgeInfoContaier.querySelector('.info-1').innerHTML = button.querySelector('.date').innerHTML;
	speakerOrJudgeInfoContaier.querySelector('.info-2').innerHTML = button.querySelector('.info').innerHTML;

	document.querySelectorAll('#speakers_and_judges .speakers-judges-container > div').forEach(element => {
		element.style.display = "none";
	});

	speakerOrJudgeInfoContaier.style.display = "block";
}

