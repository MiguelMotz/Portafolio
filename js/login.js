let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signUp");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUp.onclick = function() {
    nameInput.style.maxHeight = "60";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}