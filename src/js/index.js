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
    navBar.style.right = '-40vh';
});
// console.log(menu, navBar);
const scrollBtn = document.querySelector("#scroll-top");
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
const showScrollButton = () => {
    let y = window.scrollY;
    if (y > 500) {
        scrollBtn.style.visibility = "visible";
    }
    else {
        scrollBtn.style.visibility = "hidden";
    }
};
window.addEventListener("scroll", showScrollButton);
// const animation=anime({})
