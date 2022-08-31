const barsBtn = document.querySelector('.bars-btn')
const allMobileLinks = document.querySelectorAll('.mobile-link')
const mobileMenu = document.querySelector('.mobile-menu')
const firstName = document.querySelector('#name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const lastName = document.querySelector('#last-name')
const message = document.querySelector('#message')
const submitBtn = document.querySelector('.submit')
const singleSection = document.querySelectorAll('.single-section')
const popup = document.querySelector('.send-popup')

const showMenu = () => {
	mobileMenu.classList.toggle('active')
}

const closeMenu = () => {
	mobileMenu.classList.remove('active')
}

const showError = (input, msg) => {
	const section = input.parentElement
	const errorText = input.nextElementSibling
	section.classList.add('error')
	errorText.textContent = msg
}

const showPopup = () => {
	popup.style.display = 'flex'

	setTimeout(() => {
		popup.style.display = 'none'
	}, 4500)
}


const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}
const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.textContent} składa sie z min. ${min} znaków`)
	} else {
		addUnderLine(input)
	}
}
const checkPhoneNumber = (input, min) => {
	if (input.value.length < min) {
		showError(input, `Nr.telelefonu składa sie z 9 liczb`)
	} else {
		addUnderLine(input)
	}
}
const checkMail = input => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value)) {
		addUnderLine(input)
	} else {
		showError(input, `E-mail jest nieprawidłowy`)
	}
}
const checkErrors = () => {
	let errorCount = 0
	const checkSection = document.querySelectorAll('.single-section')
	

	checkSection.forEach(el => {
		if (el.classList.contains('error')) {
			console.log(errorCount)
			errorCount++
		}
	})
	if (errorCount === 0) {
		showPopup()
		clearInputs([firstName, email, phone, lastName, message])
	}
}
const clearInputs = input => {
	input.forEach(el => {
		el.value = ''
	})
}
const clearError = el => {
	const section = el.parentElement
	section.classList.remove('error')
}
const addUnderLine = input => {
	input.style.borderBottom = '1px solid rgb(18, 209, 28)'
}
barsBtn.addEventListener('click', showMenu)
submitBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm([firstName, email, phone, lastName, message])
	checkLength(firstName, 4)
	checkLength(lastName, 4)
	checkPhoneNumber(phone, 9)
	checkMail(email)
	checkErrors()
})
