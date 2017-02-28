var current = -1
var sections

var extrovertedScore = 0
var spontaneousScore = 0
var extrovertedResult, spontaneousResult

window.addEventListener('load', function () {
	sections = document.querySelectorAll('section')
	showNext()

	nextButtons = document.querySelectorAll('section button')
	for (var i = 0; i < nextButtons.length; i++) {
		nextButtons[i].addEventListener('click', showNext)
	}

	answerButtons = document.querySelectorAll('section button.answer')
	for (var i = 0; i < answerButtons.length; i++) {
		var extroverted = answerButtons[i].classList.contains('extroverted')
		var inverted = answerButtons[i].classList.contains('inverted')
		answerButtons[i].addEventListener('click', trackAnswer.bind(null, extroverted, inverted, i % 4))
	}

	extrovertedResult = document.querySelector('section div.result div.extroverted')
	spontaneousResult = document.querySelector('section div.result div.spontaneous')
})

function showNext() {
	if (current >= 0) {
		sections[current].classList.remove('active')
	}
	current++
	if (current == 11) {
		var extrovertedResultHTML = ''
		for (var i = 0; i < extrovertedScore + 10; i++) {
			extrovertedResultHTML += '<div></div>'
		}
		extrovertedResultHTML += '<p>' + extrovertedScore + '</p>'
		extrovertedResult.innerHTML = extrovertedResultHTML

		var spontaneousResultHTML = ''
		for (var i = 0; i < spontaneousScore + 10; i++) {
			spontaneousResultHTML += '<div></div>'
		}
		spontaneousResultHTML += '<p>' + spontaneousScore + '</p>'
		spontaneousResult.innerHTML = spontaneousResultHTML
	}

	sections[current].classList.add('active')
}

function trackAnswer(extroverted, inverted, index) {
	if (index > 1) {
		index++
	}
	if (extroverted) {
		extrovertedScore -= (inverted ? -2 : 2) * (index * 0.5 - 1)
	}
	else {
		spontaneousScore -= (inverted ? -2 : 2) * (index * 0.5 - 1)
		console.log(spontaneousScore)
	}
}
