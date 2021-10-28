"use strict";
//Xóa thư mục node_modules khỏi kho lưu trữ git
//git rm -r --cached node_modules
const menu = document.querySelector("#menu");
const navBar = document.querySelector("#navbar");
menu.addEventListener("click", () => {
    menu.style.visibility = "hidden";
    navBar.style.right = '1em';
});
navBar.addEventListener("click", () => {
    menu.style.visibility = "visible";
    navBar.style.right = '-255px';
});
// console.log(menu, navBar);
const scrollBtn = document.querySelector("#scroll-top");
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// var body = document.querySelector('body') as HTMLBodyElement;
// var demoCalc = window.getComputedStyle(body).getPropertyValue('background-position');
const showScrollButton = () => {
    // var pixelsY = (parseFloat(demoCalc) / 100 * body.offsetHeight) + 'px';
    // body.style.backgroundPositionY=y+'px';
    // console.log(demoCalc);
    // console.log(pixelsY);
    let y = window.scrollY;
    if (y > 500) {
        scrollBtn.style.visibility = "visible";
    }
    else {
        scrollBtn.style.visibility = "hidden";
    }
};
window.addEventListener("scroll", showScrollButton);
