////  switch theme
const toggleSwitch = document.querySelector(
  '.switch input[type="checkbox"]'
);
document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
if(localStorage.getItem("theme") == 'dark')
toggleSwitch.setAttribute('checked','false');
 

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
////  switch theme end

let anchorPoint = document.getElementById("anchorPoint");
let header = document.getElementById("header");

let sticky = anchorPoint.offsetTop;
function scrollFunc() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};


//// radioTabs start
const tabsBtn = document.querySelectorAll(".radioTab__item");

tabsBtn.forEach((e) => {
  onTabClick(e);
});

function onTabClick(item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let currentBtnState = item.classList.contains("active");
    let parentTab = document.querySelector(item.getAttribute('data-parent'));


    if (parentTab) {
      parentTab.querySelectorAll(".radioTab__item").forEach((e) => {
        e.classList.remove("active");
      });
    }
    if (currentBtnState) currentBtn.classList.remove("active");
    else currentBtn.classList.add("active");
  });
}
//// radioTabs end