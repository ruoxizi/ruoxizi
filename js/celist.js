function scriptExists(url) {
  let scripts = document.querySelectorAll("script");
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src === url) {
      console.log(scripts[i].src);
      return true;
    }
  }
  return false;
}
//检测某个脚本是否被加载
let flagOfIndexMain = false;
let flagOfBuyIndex = false;
let flagOfMyIndex = false;
let flagOfDetail = false;
let scriptUrl = "http://127.0.0.1:5500/js/indexMain.js";
let scriptUrl2 = "http://127.0.0.1:5500/js/buyCar/buyIndex.js";
let scriptUrl3 = "http://127.0.0.1:5500/js/myindex.js";
let scriptUrl4 = "http://127.0.0.1:5500/js/buyCar/detail.js";
if (scriptExists(scriptUrl)) {
  flagOfIndexMain = true;
}
if (scriptExists(scriptUrl2)) {
  flagOfBuyIndex = true;
}
if (scriptExists(scriptUrl3)) {
  flagOfMyIndex = true;
}
if (scriptExists(scriptUrl4)) {
  flagOfDetail = true;
}

//检测当前是黑夜模式，还是白日模式,同时用于每个页面
let mode = "sun";

let timeoutId;
let isMouseOverSidebar = false; // 标记鼠标是否在侧边栏内部
const body = document.querySelector("body");
const shell = body.querySelector("nav");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");
let btnMyIndex;
let Tag;
let card_content;
let card_title;
let card_small_title;
let drawer_head;
let drawer_btn;
let card;
let ItemDark;
let cartTabDark;
if (flagOfIndexMain) {
  card_content = document.querySelectorAll(".card-content");
  card_title = document.querySelectorAll(".card-title");
  card_small_title = document.querySelectorAll(".card-small-title");
  drawer_head = document.querySelectorAll(".drawer-head");
  drawer_btn = document.querySelectorAll(".drawer-btn");
  card = document.querySelectorAll(".card");
}
if (flagOfMyIndex) {
  btnMyIndex = body.querySelectorAll(".MyIndexButton");
  Tag = body.querySelectorAll(".tag");
}
//移动鼠标触发事件，展开侧边栏
shell.addEventListener("mouseenter", () => {
  clearTimeout(timeoutId);
  shell.classList.remove("close");
  isMouseOverSidebar = true;
});
shell.addEventListener("mouseleave", () => {
  isMouseOverSidebar = false;
  checkCloseSidebar();
});
function checkCloseSidebar() {
  if (!isMouseOverSidebar) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      shell.classList.add("close");
    }, 500); // 等待500ms再关闭侧边栏
  }
}
// 点击searchBtn元素时触发事件
searchBtn.addEventListener("click", () => {
  // 移除shell元素的close类
  shell.classList.remove("close");
});
// 点击modeSwitch元素时触发事件
function turnDark() {
  if (flagOfBuyIndex || flagOfDetail) {
    ItemDark = document.querySelectorAll(".listProduct .item");
    cartTabDark = document.querySelectorAll(".cartTab");
  }
  modeText.innerText = "夜间模式";
  mode = "dark";
  document.body.style.backgroundImage = 'url("./images/bg2.jpg")';
  if (flagOfIndexMain) {
    for (let i = 0; i < card_content.length; i++)
      card_content[i].classList.toggle("dark");
    for (let i = 0; i < card_title.length; i++)
      card_title[i].classList.toggle("dark");
    for (let i = 0; i < card_small_title.length; i++)
      card_small_title[i].classList.toggle("dark");
    for (let i = 0; i < card.length; i++) card[i].classList.toggle("dark");
    document.getElementById("bar").classList.toggle("dark");
    document.getElementById("slide-bar").classList.toggle("dark");
    for (let i = 0; i < drawer_head.length; i++)
      drawer_head[i].classList.toggle("dark");
    for (let i = 0; i < drawer_btn.length; i++)
      drawer_btn[i].classList.toggle("dark");
  }
  if (flagOfBuyIndex || flagOfDetail) {
    for (let i = 0; i < ItemDark.length; i++)
      ItemDark[i].classList.toggle("dark");
    for (let i = 0; i < cartTabDark.length; i++)
      cartTabDark[i].classList.toggle("dark");
  }
  if (flagOfMyIndex) {
    for (let i = 0; i < btnMyIndex.length; i++)
      btnMyIndex[i].classList.toggle("dark");
    for (let i = 0; i < Tag.length; i++) Tag[i].classList.toggle("dark");
  }
}
function turnSun() {
  if (flagOfBuyIndex || flagOfDetail) {
    ItemDark = document.querySelectorAll(".listProduct .item");
    cartTabDark = document.querySelectorAll(".cartTab");
  }
  modeText.innerText = "白日模式";
  mode = "sun";
  if (flagOfIndexMain)
    document.body.style.backgroundImage = 'url("./images/bg.jpg")';
  else document.body.style.backgroundImage = 'url("./images/html_table.jpg")';

  if (flagOfIndexMain) {
    for (let i = 0; i < card_content.length; i++)
      card_content[i].classList.toggle("dark");
    for (let i = 0; i < card_title.length; i++)
      card_title[i].classList.toggle("dark");
    for (let i = 0; i < card_small_title.length; i++)
      card_small_title[i].classList.toggle("dark");
    for (let i = 0; i < card.length; i++) card[i].classList.toggle("dark");
    for (let i = 0; i < drawer_head.length; i++)
      drawer_head[i].classList.toggle("dark");
    for (let i = 0; i < drawer_btn.length; i++)
      drawer_btn[i].classList.toggle("dark");
    document.getElementById("bar").classList.toggle("dark");
    document.getElementById("slide-bar").classList.toggle("dark");
  }
  if (flagOfBuyIndex || flagOfDetail) {
    for (let i = 0; i < ItemDark.length; i++)
      ItemDark[i].classList.toggle("dark");
    for (let i = 0; i < cartTabDark.length; i++)
      cartTabDark[i].classList.toggle("dark");
  }
  if (flagOfMyIndex) {
    for (let i = 0; i < btnMyIndex.length; i++)
      btnMyIndex[i].classList.toggle("dark");
    for (let i = 0; i < Tag.length; i++) Tag[i].classList.toggle("dark");
  }
}
modeSwitch.addEventListener("click", () => {
  // 如果body元素包含dark类
  if (body.classList.contains("dark")) {
    // 切换body元素的dark类
    body.classList.toggle("dark");
    turnSun();
  } else {
    body.classList.toggle("dark");
    turnDark();
  }
  const keys = Array.from({ length: localStorage.length }, (_, i) =>
    localStorage.key(i)
  );
  keys.forEach((key) => {
    const v = localStorage.getItem(key);
    const obj = JSON.parse(v);
    if (obj.HasLogin) {
      obj.mode = mode;
      // 将更改后的对象转换回字符串
      let updatedString = JSON.stringify(obj);
      // 将更新后的字符串写回localStorage
      localStorage.setItem(`${obj.name}`, updatedString);
    }
  });
});

//检测是否登录
const li = document.querySelector('[data-id="liLogin"]');
const li2 = li.nextElementSibling;
//渲染登录事件
let loginCheck = false; //判断是否登录
const yourname = document.getElementById("yourname");
//渲染是否登录
function render() {
  loginCheck = false;
  yourname.innerText = ` `;
  li.innerHTML = `<a href="#">
              <i class="iconfont icon-zhuxiaoyuan icon"></i>
              <span class="text nac-text">登录</span>
            </a>`;
  li2.innerHTML = `<a style="display:none;" href="#">
              <span class="text nac-text"></span>
            </a>`;
  const keys = Array.from({ length: localStorage.length }, (_, i) =>
    localStorage.key(i)
  );
  keys.forEach((key) => {
    const v = localStorage.getItem(key);
    const obj = JSON.parse(v);
    if (obj.HasLogin == true) {
      loginCheck = true;
      mode = obj.mode;
      if (mode == "dark") {
        // 切换body元素的dark类
        body.classList.toggle("dark");
        turnDark();
      }
      yourname.innerText = `${obj.name}`;
      li.innerHTML = `<a style="display:none;"  href="#">
              <span class="text nac-text"></span>
            </a>`;
      li2.innerHTML = `<a href="#">
              <i class="iconfont icon-zhuxiaoyuan icon"></i>
              <span class="text nac-text">退出</span>
            </a>`;
    }
  });
}
render();

//退出事件
li2.addEventListener("click", function (e) {
  if (loginCheck && confirm("确定退出吗？")) {
    const keys = Array.from({ length: localStorage.length }, (_, i) =>
      localStorage.key(i)
    );
    keys.forEach((key) => {
      const v = localStorage.getItem(key);
      const obj = JSON.parse(v);
      if (obj.HasLogin == true) {
        obj.HasLogin = false;
        // 将更改后的对象转换回字符串
        let updatedString = JSON.stringify(obj);
        // 将更新后的字符串写回localStorage
        localStorage.setItem(`${obj.name}`, updatedString);
      }
    });
    //localStorage.removeItem("uname");
    render();
    location.href = "index.html";
  }
});
const li3 = document.querySelector('[data-id="mycart"]');
const li5 = document.querySelector('[data-id="message"]');
const li6 = document.querySelector('[data-id="myindex"]');
const li7 = document.querySelector('[data-id="callus"]');
const li8 = document.querySelector('[data-id="backHome"]');
const li9 = document.querySelectorAll(".getMore");
//侧边栏各个按钮事件的触发
li.addEventListener("click", function (e) {
  if (!loginCheck) location.href = "login.html";
});
li3.addEventListener("click", function (e) {
  if (!loginCheck) {
    alert("请先登录！");
    return;
  }
  location.href = "buyindex.html";
});
li5.addEventListener("click", function (e) {
  if (!loginCheck) {
    alert("请先登录！");
    return;
  }
  location.href = "buyHistory.html";
  // alert("开发中，尽情期待！");
});
li6.addEventListener("click", function (e) {
  if (!loginCheck) {
    alert("请先登录！");
    return;
  }
  location.href = "myindex.html";
});
li7.addEventListener("click", function (e) {
  location.href = "callus.html";
});
li8.addEventListener("click", function (e) {
  location.href = "index.html";
});

for (let i = 0; i < li9.length; i++) 
  li9[i].addEventListener("click", function () {
  location.href = "buyindex.html";
});