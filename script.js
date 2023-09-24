const lengthInput = document.querySelector('#length')
const lengthNumberSpan = document.querySelector('#lengthNumber')
const pwdOutput = document.getElementById('output')
const lettersCheckbox = document.getElementById('letters')
const digitsCheckbox = document.getElementById('digits')
const symbolsCheckbox = document.getElementById('symbols')

const lettersList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const digitsList = "0123456789"
const symbolsList = "?,;.:/\\”=+%`£*$-_)!§('&@"

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

	pwdGeneration(
		lengthNumberSpan.innerText,
		lettersCheckbox.checked,
		digitsCheckbox.checked,
		symbolsCheckbox.checked
	)
}

/**
 * This function is used to display the correct value and css style
 */
function firstRender() {
	lengthNumberSpan.innerText = lengthInput.value
	lengthInput.style.backgroundSize = (lengthInput.value - lengthInput.min) * 100 / (lengthInput.max - lengthInput.min) + '% 100%'
}

/**
 * Generate the password depending on the checkbox,
 * then return the result to the display function
 * @param value
 * @param letters
 * @param digits
 * @param symbols
 */
function pwdGeneration(value, letters, digits, symbols) {
	let result = ''
	let letterList = lettersList.split('')
	let digitList = digitsList.split('')
	let symbolList = symbolsList.split('')
	let list = lettersList.split('')

	if (digits) {
		list = list + digitList
	}
	if (symbols) {
		list = list + symbolList
	}
	if (letters) {
		list = list + letterList
	}

	let listArray = list.split(',')
	for (let i = 0; i < value; i++) {
		result = result + listArray[Math.floor(Math.random() * listArray.length)]
	}

	return displayPwd(result)
}

function displayPwd(result) {
	pwdOutput.innerText = result
}

firstRender()
pwdGeneration(
	lengthInput.value,
	lettersCheckbox.checked,
	digitsCheckbox.checked,
	symbolsCheckbox.checked
)

lengthInput.addEventListener('input', (e) => {
	handleInputChange(e)
})

lettersCheckbox.addEventListener('click', (e) => {
	handleInputChange(e)
})

digitsCheckbox.addEventListener('click', (e) => {
	handleInputChange(e)
})

symbolsCheckbox.addEventListener('click', (e) => {
	handleInputChange(e)
})
