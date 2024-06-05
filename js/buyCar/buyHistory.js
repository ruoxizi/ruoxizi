import products from "./products.js";

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
  const itemValue=localStorage.getItem(key);
  const obj = JSON.parse(itemValue);
  let totalPrice = obj.totalPrice;
  console.log(obj.goods);
  let newSide=document.createElement("div");
  newSide.classList.add("newSide");
      let newdiv = document.createElement("div");
      newdiv.classList.add("listCart");
      let topDiv=document.createElement("div");
      let finalDiv=document.createElement("div");
      topDiv.innerHTML=`<div class="time">时间：${obj.time}</ div>`;
      finalDiv.innerHTML=`<div class="finalPrice">总金额：${totalPrice}</div>`
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
  })
  newdiv.appendChild(finalDiv);
});


