const products = [
  {
    id: 1,
    name: "美味甜椒",
    price: 700,
    image: "./image/蔬菜/bell-peppers-499068.jpg",
    description:
      "产自江门五邑大学,采用了最新工艺，经由专人培育，品质极佳，获得国家五星级认证，买家可放心购买！七天内无理由退换！",
  },
  {
    id: 2,
    name: "美味菜花",
    price: 700,
    image: "./image/蔬菜/vegetables-1238252.jpg",
    description:
      "产自江门五邑大学，风味独特，十分可口！经由专人培育，品质极佳，获得国家五星级认证，买家可放心购买！七天内无理由退换！",
  },
  {
    id: 3,
    name: "美味绿豆",
    price: 700,
    image: "./image/蔬菜/green-beans-1018624.jpg",
    description:
      "产自江门五邑大学，风味独特，十分可口！经由专人培育，品质极佳，获得国家五星级认证，买家可放心购买！七天内无理由退换！",
  },
  {
    id: 4,
    name: "美味胡萝卜",
    price: 700,
    image: "./image/蔬菜/carrots-1508847.jpg",
    description:
      "产自江门五邑大学，风味独特，十分可口！经由专人培育，品质极佳，获得国家五星级认证，买家可放心购买！七天内无理由退换！",
  },
  {
    id: 5,
    name: "美味西瓜",
    price: 200,
    image: "./image/水果/watermelon-833202.jpg",
    description:
      "产自江门五邑大学，风味独特，十分可口！经由专人培育，品质极佳，获得国家五星级认证，买家可放心购买！七天内无理由退换！",
  },
  {
    id: 6,
    name: "美味葡萄",
    price: 230,
    image: "./image/水果/paris-2406492_1920.jpg",
    description:
      "产自江门五邑大学，风味独特，十分可口！经由专人培育，品质极佳，获得国家五星级认证，买家可放心购买！七天内无理由退换！",
  },
  {
    id: 7,
    name: "美味苹果",
    price: 230,
    image: "./image/水果/apple-1122537_1920.jpg",
    description:
      "产自江门五邑大学，风味独特，十分可口！经由专人培育，品质极佳，获得国家五星级认证，买家可放心购买！七天内无理由退换！",
  },
  {
    id: 8,
    name: "蔬菜杂烩",
    price: 230,
    image: "./image/蔬菜/vegetables-1238252.jpg",
    description:
      "产自江门五邑大学，风味独特，十分可口！经由专人培育，品质极佳，获得国家五星级认证，买家可放心购买！七天内无理由退换！",
  },
  {
    id: 9,
    name: "荔枝",
    price: 230,
    image: "./image/水果/lychee-510435_1920.jpg",
    description:
      "产自江门五邑大学，风味独特，十分可口！经由专人培育，品质极佳，获得国家五星级认证，买家可放心购买！七天内无理由退换！",
  },
  {
    id: 10,
    name: "葡萄",
    price: 230,
    image: "./image/水果/grapes-6673291_1920.jpg",
    description:
      "产自江门五邑大学，风味独特，十分可口！经由专人培育，品质极佳，获得国家五星级认证，买家可放心购买！七天内无理由退换！",
  },
  {
    id: 11,
    name: "红富士苹果",
    price: 230,
    image: "./image/水果/apple.jpg",
    description:
      "产自江门五邑大学，风味独特，十分可口！经由专人培育，品质极佳，获得国家五星级认证，买家可放心购买！七天内无理由退换！",
  },
  {
    id: 12,
    name: "榴莲",
    price: 230,
    image: "./image/水果/榴莲.jpg",
    description:
      "产自江门五邑大学，风味独特，十分可口！经由专人培育，品质极佳，获得国家五星级认证，买家可放心购买！七天内无理由退换！",
  },
];
let cart = JSON.parse(localStorage.getItem("cart"));
let msg = document.getElementById("myMessage");
const myname = document.getElementById("myname");
const mycall = document.getElementById("mycall");
const myaddress = document.getElementById("myaddress");
const form = document.querySelector("form");
const keys = Array.from({ length: localStorage.length }, (_, i) =>
  localStorage.key(i)
);
keys.forEach((key) => {
  const v = localStorage.getItem(key);
  let obj = JSON.parse(v);
  if (obj.HasLogin == true) {
    msg.innerHTML = `<div class="CheckBlock">
        收件人姓名：${obj.name}
      </div>
      <div class="CheckBlock">
        手机号码：${obj.call}
      </div>
      <div class="CheckBlock">
        收货地址：${obj.address}
      </div>`;
  }
});

const image = document.getElementById("imgg");
let flag = false;
image.addEventListener("click", function () {
  if (!flag) {
    this.src = "./images/勾.png";
    flag = true;
  } else {
    this.src = "./images/勾 (1).png";
    flag = false;
  }
});

const btnChange = document.getElementById("ChangeAndSave");
btnChange.addEventListener("click", function () {
  if (!flag) {
    if (!confirm("确定修改吗？")) {
      return;
    }
    btnChange.innerHTML = `<button id="save" class="MyIndexButton submit">保存信息</button>`;
    flag = true;
    form.classList.add("active");
    form.classList.remove("none");
    msg.innerHTML = "";
  } else {
    if (!myname.value || !mycall.value || !myaddress.value) {
      alert("不能有空值，请重新输入！");
      return;
    }
    btnChange.innerHTML = `<button id="change" class="MyIndexButton submit">修改信息</button>`;
    flag = false;
    msg.innerHTML = `<div class="CheckBlock">
        收件人姓名：${myname.value}
      </div>
      <div class="CheckBlock">
        手机号码：${mycall.value}
      </div>
      <div class="CheckBlock">
        收货地址：${myaddress.value}
      </div>`;
    form.reset();
    form.classList.remove("active");
    form.classList.add("none");
  }
});

let totalPrice = 0;
let productList = document.getElementById("productList");
cart.forEach((item) => {
  let newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.dataset.id = item.product_id;
  let positionProduct = products.findIndex(
    (value) => value.id == item.product_id
  );
  let info = products[positionProduct];
  productList.appendChild(newItem);
  newItem.innerHTML = `
                <div class="image">
                        <img src="${info.image}">
                    </div>
                    <div class="name">
                    ${info.name}
                    </div>
                    <div class="totalPrice">$${info.price * item.quantity}</div>
                    <div class="quantity">
                        <span>${item.quantity}个</span>
                    </div>
                `;
  totalPrice = totalPrice + item.quantity * info.price;
});
let newItem = document.createElement("div");
newItem.innerHTML = `
                    <div class="finalPrice myIndexInput">
                        <span>共计$${totalPrice}</span>
                    </div>
                `;
productList.appendChild(newItem);

let quxiao = document.getElementById("quxiao");
let queding = document.getElementById("queding");

quxiao.addEventListener("click", function () {
  location.href = "buyindex.html";
});

queding.addEventListener("click", function () {
  let currentTime = new Date();
  if (!flag) {
    alert("请先同意《用户服务协议》！");
    return;
  }
  if (!confirm("确定支付吗？")) {
    return;
  }
  keys.forEach((key) => {
    const v = localStorage.getItem(key);
    let obj = JSON.parse(v);
    if (obj.HasLogin == true) {
      let buyMsg = {
        name: obj.name,
        goods: cart,
        totalPrice: totalPrice,
        time: currentTime,
      };
      localStorage.setItem(
        `${obj.name}#${currentTime}`,
        JSON.stringify(buyMsg)
      );
      alert("支付成功！");
      location.href = "index.html";
      return;
    }
  });
});
