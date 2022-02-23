const text = document.getElementById("text");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    if (text.innerHTML == "Selamat datang") {
        text.innerHTML = "Wellcome";
        button.innerHTML = "Translate to indonesia";

    } else if (text.innerHTML == "Wellcome") {
        text.innerHTML = "Selamat datang"; 
        button.innerHTML = "Translate to english";
    } 

});