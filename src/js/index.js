"use strict";
//Xóa thư mục node_modules khỏi kho lưu trữ git
//git rm -r --cached node_modules
/*---------- Nav menu ---------*/
const menu = document.querySelector("#menu");
const navBar = document.querySelector("#navbar");
menu.addEventListener("click", () => {
    menu.style.visibility = "hidden";
    navBar.style.right = "1em";
});
navBar.addEventListener("click", () => {
    menu.style.visibility = "visible";
    navBar.style.right = "-16.5em";
});
// console.log(menu, navBar);
/*--------- Scroll top btn ---------*/
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
/*----------------- D3 -------------*/
//npm i -s @types/d3
const datas = [
    [
        ["Javascript", 70],
        ["NodeJs", 40],
        ["TypeScript", 40],
    ],
    [
        ["Mysql", 30],
        ["MongoDB", 50],
    ],
    [
        ["React", 70],
        ["Redux", 30],
        ["Scss", 40],
        ["Express", 40],
        ["BootStrap", 20],
        ["JQuery", 20],
    ],
];
const sections = ["#d3-language", "#d3-database", "#d3-framework"];
sections.forEach((section, i) => {
    let tr1 = d3.select(`${section}`).append("tr1");
    tr1
        .append("td")
        .selectAll("p")
        .data(datas[i])
        .enter()
        .append("p")
        .text((d) => d[0])
        .attr("class", "d3-label");
    tr1
        .append("td")
        .style("width", "100%")
        .selectAll("p")
        .data(datas[i])
        .enter()
        .append("p")
        .text((d) => d[1] + "%")
        .attr("class", "d3-bar")
        .style("width", (d) => d[1] + "%");
});
