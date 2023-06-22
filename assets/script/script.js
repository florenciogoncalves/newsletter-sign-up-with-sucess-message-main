// Define elements
let element = document.querySelector(".input-email");
let form = document.querySelector(".form");


// Functions
function validateEmail() {
let bol = true
	bol = element.value.includes('@') && bol ? true : false
	bol = element.value.includes('.') && bol ? true : false
	bol = element.value[element.value.length - 1] != '.' && bol ? true : false
	if (bol) {
		form.classList.remove("wrong");
		return true
	} else {
		form.classList.add("wrong");
		return false
	}
}

function submitForm(evt) {
	evt.preventDefault()
	if(validateEmail() && element.value.length > 0) {
		window.location.href = '../../success.html?email=' + element.value
	}
}


// Events
element.addEventListener("input", validateEmail);
form.addEventListener("submit", (evt) => submitForm(evt));

