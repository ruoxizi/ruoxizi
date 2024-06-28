const myname = document.getElementById("myname");
const button = document.getElementById("comeback");
const CAS = document.getElementById("ChangeAndSave");
const myMessage = document.getElementById("myMessage");
const form = document.querySelector("form");
const mymessage = document.getElementById("mymessage");
const call = document.getElementById("call");
const address = document.getElementById("address");
const keys = Array.from({ length: localStorage.length }, (_, i) =>
  localStorage.key(i)
);
let obj;
keys.forEach((key) => {
  const v = localStorage.getItem(key);
  obj = JSON.parse(v);
  if (obj.HasLogin == true) {
    myname.innerHTML = `${obj.name}`;
    myMessage.innerHTML = `<p class="tag">
                个人简介：${obj.mymessage || " "}
                </p>
                <br />
                <p class="tag">
                    电话：${obj.call || " "}
                </p>
                <br />
                <p class="tag">
                    收货地址：${obj.address || " "}
                </p>`;
  }
});
button.addEventListener("click", function () {
  location.href = "index.html";
});
let flag = false;
CAS.addEventListener("click", function () {
  if (!flag) {
    if (!confirm("确定修改吗？")) {
      return;
    }
    CAS.innerHTML = `<button id="save" class="MyIndexButton submit">保存个人名片信息</button>`;
    flag = true;
    form.classList.add("active");
    form.classList.remove("none");
    myMessage.innerHTML = "";
  } else {
    CAS.innerHTML = `<button id="change" class="MyIndexButton submit">修改个人名片信息</button>`;
    flag = false;
    if (!mymessage.value || !call.value || !address.value) {
      alert("不能有空值，请重新输入！");
      return;
    }
    myMessage.innerHTML = `<p class="tag">
                个人简介：${mymessage.value || " "}
                </p>
                <br />
                <p class="tag">
                    电话：${call.value || " "}
                </p>
                <br />
                <p class="tag">
                    收货地址：${address.value || " "}
                </p>`;
    keys.forEach((key) => {
      const v = localStorage.getItem(key);
      const obj = JSON.parse(v);
      if (obj.HasLogin == true) {
        if (mymessage.value) obj.mymessage = mymessage.value;
        if (call.value) obj.call = call.value;
        if (address.value) obj.address = address.value;
        // 将更改后的对象转换回字符串
        let updatedString = JSON.stringify(obj);
        // 将更新后的字符串写回localStorage
        localStorage.setItem(`${obj.name}`, updatedString);
      }
    });
    form.reset();
    form.classList.add("none");
    form.classList.remove("active");
  }
});
