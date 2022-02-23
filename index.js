const text = document.getElementById("text");

document.getElementById("button").addEventListener("click", () => {
    if (text.innerHTML == "Selamat datang") {
        text.innerHTML = "Wellcome"; 
    } else if (text.innerHTML == "Wellcome") {
        text.innerHTML = "Selamat datang"; 
    } 

});