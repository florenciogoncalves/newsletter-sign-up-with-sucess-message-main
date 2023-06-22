let element = document.querySelector(".input-email");
let form = document.querySelector(".form");
element.addEventListener("input", () => {
  let bol = true
	bol = element.value.includes('@') && bol ? true : false
	bol = element.value.includes('.') && bol ? true : false
	if (bol) {
    console.log('Foi adicionado')
		form.classList.remove("wrong");
	} else {
  console.log('Foi removido')
		form.classList.add("wrong");
	}
});
