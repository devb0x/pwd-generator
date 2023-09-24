const lengthInput = document.querySelector('#length')
const lengthNumberSpan = document.querySelector('#lengthNumber')
const pwdOutput = document.getElementById('output')

const charactersList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function handleInputChange(e) {
	let target = e.target
	if (e.target.type !== 'range') {
		target = document.getElementById('length')
	}
	const min = target.min
	const max = target.max
	const value = target.value

	target.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%'

	lengthNumberSpan.innerText = value

	pwdGeneration(value)
}

function pwdGeneration(value) {
	let result = ''
	let chList = charactersList.split('')

	for (let i = 0; i < value; i++) {
		result = result + chList[Math.floor(Math.random() * chList.length)]
	}

	return displayPwd(result)
}

function displayPwd(result) {
	pwdOutput.innerText = result
}

lengthInput.addEventListener('input', (e) => {
	handleInputChange(e)
})
