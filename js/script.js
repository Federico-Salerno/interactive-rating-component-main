let numberContainer = document.getElementById("ratingNumbCont");
let submitBtn = document.getElementById("submit");
let ratingState = document.getElementById("ratingState");
let thanksState = document.getElementById("thanksState");
let rateNumber = document.getElementById("thanksNumb");

numberContainer.addEventListener("click", (event) => {
    event.preventDefault()
    var numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    if (numberSelected != undefined){
        submitBtn.addEventListener("click", () => {
            ratingState.style.display = "none";
            thanksState.style.display = "flex";
        });
    }
})
