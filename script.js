//VARIABLES SECTION

const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btn = document.querySelector('.count')
const err = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const costInfoSpan = document.querySelector('.cost')

//FUNCTIONS SECTION

const showBill = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		err.textContent = 'Uzupełnij wszystkie pola'
	} else {
		err.textContent = ''
		costInfo.style.display = 'none'
		countBill()
	}
}

const countBill = () => {
	const newPrice = parseFloat(price.value)
	const newPeople = parseInt(people.value)
	const newTip = parseFloat(tip.value)

	const sum = (newPrice + newPrice * newTip) / newPeople

	costInfo.style.display = 'block'
	costInfoSpan.textContent = sum.toFixed(2)
}

//LISTENERS SECTION

btn.addEventListener('click', showBill)

// price + tip / people
