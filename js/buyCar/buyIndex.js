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

function cart() {
  let listCartHTML = document.querySelector(".listCart");
  let iconCart = document.querySelector(".icon-cart");
  let iconCartSpan = iconCart.querySelector("span");
  let body = document.querySelector("body");
  let closeCart = document.querySelector(".buyINDEXclose");
  let cart = [];
  let checkOut;
  checkOut = document.querySelector(".buyINDEXcheckOut");
  checkOut.addEventListener("click", function () {
    location.href = "checkOut.html";
  });
  // open and close tab
  iconCart.addEventListener("click", () => {
    body.classList.toggle("activeTabCart"); //开启右边栏
  });
  closeCart.addEventListener("click", () => {
    body.classList.toggle("activeTabCart");
  });

  function setProductInCart(idProduct, value) {
    let positionThisProductInCart = cart.findIndex(
      (value) => value.product_id == idProduct
    );
    if (value <= 0) {
      cart.splice(positionThisProductInCart, 1);
    } else if (positionThisProductInCart < 0) {
      cart.push({
        product_id: idProduct,
        quantity: 1,
      });
    } else {
      cart[positionThisProductInCart].quantity = value;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    addCartToHTML();
  }
  function addCartToHTML() {
    listCartHTML.innerHTML = "";
    let totalQuantity = 0;
    if (cart.length > 0) {
      cart.forEach((item) => {
        totalQuantity = totalQuantity + item.quantity;
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.dataset.id = item.product_id;
        let positionProduct = products.findIndex(
          (value) => value.id == item.product_id
        );
        let info = products[positionProduct];
        listCartHTML.appendChild(newItem);
        newItem.innerHTML = `
                <div class="image showMsg" style="font-weight: 700;border:2px solid black;">
                        <img src="${info.image}">
                    </div>
                    <div class="name">
                    ${info.name}
                    </div>
                    <div class="totalPrice">$${info.price * item.quantity}</div>
                    <div class="quantity">
                        <span class="minus" data-id="${info.id}"><</span>
                        <span style="color:red;">${item.quantity}</span>
                        <span class="plus" data-id="${info.id}">></span>
                    </div>
                `;
      });
    }
    iconCartSpan.innerText = totalQuantity;
  }
  document.addEventListener("click", (event) => {
    let buttonClick = event.target;
    let idProduct = buttonClick.dataset.id;
    let quantity = null;
    let positionProductInCart = cart.findIndex(
      (value) => value.product_id == idProduct
    );
    switch (true) {
      case buttonClick.classList.contains("addCart"):
        quantity =
          positionProductInCart < 0
            ? 1
            : cart[positionProductInCart].quantity + 1;
        setProductInCart(idProduct, quantity);
        break;
      case buttonClick.classList.contains("minus"):
        quantity = cart[positionProductInCart].quantity - 1;
        setProductInCart(idProduct, quantity);
        break;
      case buttonClick.classList.contains("plus"):
        quantity = cart[positionProductInCart].quantity + 1;
        setProductInCart(idProduct, quantity);
        break;
      default:
        break;
    }
  });

  function CartInitApp() {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      addCartToHTML();
    }
  }
  CartInitApp();
}

let app = document.getElementById("app");
let temporaryContent = document.getElementById("temporaryContent");

function initApp() {
  let listProductHTML = document.querySelector(".listProduct");
  listProductHTML.innerHTML = null;
  products.forEach((product) => {
    let newProduct = document.createElement("div");
    newProduct.classList.add("item");
    newProduct.innerHTML = `<a href="#">
        <img src="${product.image}">
        </a>
        <div class="block">
        <h2>${product.name}</h2>
        </div>
                <div class="BlockpPrice">
        <div class="price">$${product.price}</div>
        </div>
        <div>
         <button 
             class="addCart" 
             data-id='${product.id}'>
                添加到购物车
         </button>
         </div>
                  <a 
             class="showMsg"
             href='./${product.id}.html'>
                了解更多
         </a>`;
    listProductHTML.appendChild(newProduct);
  });
}

function load() {
  cart();
  initApp();
}
load();
