let btn = document.getElementById("btn");
btn.addEventListener("click", btnClick);
let boll = document.getElementById("myImage");

function init() {
    boll.style.position = "relative";
    boll.style.left = "0px";
}

function btnClick() {
    let a = parseInt(boll.style.marginLeft);
    boll.style.left = parseInt(boll.style.left) + 10 + "px";
}

window.onload = init;