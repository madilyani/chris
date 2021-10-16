////  switch theme
const toggleSwitch = document.querySelector(
  '.switch input[type="checkbox"]'
);

document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
if(localStorage.getItem("theme") == 'dark')
 

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

if(toggleSwitch){
  toggleSwitch.setAttribute('checked','false');
  toggleSwitch.addEventListener("change", switchTheme, false);

}
////  switch theme end


//// sticky
let anchorPoint = document.getElementById("anchorPoint");
let header = document.getElementById("header");
if(anchorPoint && header){
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
}
////// sticky end

var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var menuClose = document.getElementById("menuClose");
var body = document.body;

if(menuClose){
  menuClose.onclick = function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  };
}

if(menu && menuBtn){
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
}

//// radioTabs start
const radioBtnSelector = '.radioBtn';
const TabSelector = '.radioTab';
const tabsBtns = document.querySelectorAll(radioBtnSelector);
const tabs = document.querySelectorAll(TabSelector);

tabsBtns.forEach((e) => {
  onTabClick(e);
});
var tab = null;
function onTabClick(item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let currentBtnState = item.classList.contains("active");
    let parent = document.querySelector(item.getAttribute('data-parent'));
    let linkedTab = document.querySelector(item.getAttribute('data-tab'));
    let currentTabState = linkedTab?.classList.contains('active');
    
    if (parent) {
      parent.querySelectorAll(radioBtnSelector).forEach((e) => {
        e.classList.remove("active");
      });
      parent.querySelectorAll(TabSelector).forEach((e)=>{
        e.classList.remove("active");
      });

    }
   
    
    if(linkedTab && tabs){
      
      if (currentTabState) linkedTab.classList.remove("active");
      else linkedTab.classList.add("active");
    }

    if (currentBtnState) currentBtn.classList.remove("active");
    else currentBtn.classList.add("active");
  });
}
//// radioTabs end