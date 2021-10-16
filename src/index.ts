//Xóa thư mục node_modules khỏi kho lưu trữ git 
//git rm -r --cached node_modules

const menu = document.querySelector("#menu") as HTMLElement;
const navBar = document.querySelector("#navbar") as HTMLElement;
menu.addEventListener("click", () => {
  navBar.style.visibility = "visible";
  menu.style.visibility = "hidden";
});
navBar.addEventListener("click", () => {
  menu.style.visibility = "visible";
  navBar.style.visibility = "hidden";
});
console.log(menu, navBar);
