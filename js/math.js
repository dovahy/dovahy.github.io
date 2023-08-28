let startTheorie = document.querySelector("#startTheorie");
let startRechnung = document.querySelector("#startRechnung")

//Start button pressed
startTheorie.addEventListener("click", () => {
    startTheorie.style.display = "none";
    startRechnung.style.display = "none";
    guideTheorie.style.display = "block";
    guideRechnung.style.display = "none";
});

startRechnung.addEventListener("click", () => {
    startTheorie.style.display = "none";
    startRechnung.style.display = "none";
    guideTheorie.style.display = "none";
    guideRechnung.style.display = "block";
});