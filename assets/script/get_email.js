const setEmail = document.querySelector('.post-email')
let getEmail = new URLSearchParams(window.location.search)

setEmail.textContent = getEmail.get('email')