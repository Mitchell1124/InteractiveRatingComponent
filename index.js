const mainComponent = document.querySelector(".main-component");
const thankyouComponent = document.querySelector(".thankyou-component");
const submitBtn = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click", () => {
    thankyouComponent.classList.remove("hidden")
    mainComponent.style.display="none";
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})


