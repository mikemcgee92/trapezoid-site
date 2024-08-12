const bffImg = document.getElementById("bff-img")
const clickedOnMsg = document.getElementById("bday-date")

bffImg.addEventListener("click", function() {
    clickedOnMsg.innerHTML = "You have clicked on this man"
})