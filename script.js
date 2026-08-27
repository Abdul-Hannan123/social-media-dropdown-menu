var selectField = document.querySelector("#selectField");
var selectText = document.querySelector("#selectText");
var options = document.querySelectorAll(".options");
var list = document.querySelector("#list");
var arrowIcon = document.querySelector("#arrowIcon");
selectField.onclick = function () {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}
for (value of options) {
    value.onclick = function () {
        selectText.innerHTML = this.textContent; //jo element click kia jay us ka text content selectText ma a jay 
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");


    }
}