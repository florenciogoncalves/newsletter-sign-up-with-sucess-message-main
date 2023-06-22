let element = document.querySelector(".input-email");
let form = document.querySelector(".form");
element.addEventListener("input", () => {
  let bol = true
	bol = element.value.includes('@') && bol ? true : false
	bol = element.value.includes('.') && bol ? true : false
	bol = element.value[element.value.length - 1] != '.' && bol ? true : false
	if (bol) {
		form.classList.remove("wrong");
	} else {
		form.classList.add("wrong");
	}
});
