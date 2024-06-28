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

let historyMain = document.getElementById("history");
let uname;
const keys = Array.from({ length: localStorage.length }, (_, i) =>
  localStorage.key(i)
);
keys.forEach((key) => {
  const v = localStorage.getItem(key);
  const obj = JSON.parse(v);
  if (obj.HasLogin == true) {
    uname = obj.name;
  }
});

// 创建一个空数组来存储包含指定字符的键
let buyHistory = [];

// 遍历localStorage中的每一个键
for (let key of Object.keys(localStorage)) {
  // 检查键名是否包含指定的字符
  if (key.includes(uname) && key.includes("#")) {
    buyHistory.push(key);
  }
}

// // 打印出包含指定字符的键
// console.log(keys);
buyHistory.forEach((key) => {
  const itemValue = localStorage.getItem(key);
  const obj = JSON.parse(itemValue);
  let totalPrice = obj.totalPrice;
  console.log(obj.goods);
  let newSide = document.createElement("div");
  newSide.classList.add("newSide");
  let newdiv = document.createElement("div");
  newdiv.classList.add("listCart");
  let topDiv = document.createElement("div");
  let finalDiv = document.createElement("div");
  topDiv.innerHTML = `<div class="time">时间：${obj.time}</ div>`;
  finalDiv.innerHTML = `<div class="finalPrice">总金额：${totalPrice}</div>`;
  historyMain.appendChild(newSide);
  newdiv.appendChild(topDiv);
  newSide.appendChild(newdiv);
  obj.goods.forEach((good) => {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.dataset.id = good.product_id;
    let positionProduct = products.findIndex(
      (value) => value.id == good.product_id
    );
    let info = products[positionProduct];
    newItem.innerHTML = `
                <div class="BuyHistoryImage">
                        <img src="${info.image}">
                    </div>
                    <div class="BuyHistoryName">
                    商品名：${info.name}
                    </div>
                    <div class="BuyHistoryTotalPrice">单价：$${
                      info.price * good.quantity
                    }</div>
                    <div class="BuyHistoryQuantity">
                        购买数量：<span>${good.quantity}</span>
                    </div>
                `;
    newdiv.appendChild(newItem);
  });
  newdiv.appendChild(finalDiv);
});
