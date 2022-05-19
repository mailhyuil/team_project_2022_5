const basket_button = document.querySelector(".basket-button"); // 장바구니 버튼
const basket_wrapper = document.querySelector(".wrapper"); // 장바구니
const subs = document.querySelectorAll(".sub"); // 빼기 버튼
const sub_wrapper = document.querySelector(".sub-wrapper");
const count = document.querySelector(".count"); // 장바구니 카운트
const $sum = document.querySelector(".sum");
let classes = document.querySelectorAll(".classes");

let sum = 0;


for (let c of classes) {
  c.addEventListener("click", (e) => {
    // 장바구니 숨기기
    if (e.target.className !== "sub") {
      basket_wrapper.classList.remove("click");
      basket_button.style.display = "flex";

      aca_wrapper.classList.add("click");
    }
  })
}


for (let c of classes) {
  let intPayment = Number.parseInt(c.dataset.expense);
  sum += intPayment;
}
$sum.innerHTML = `총액 : ${sum}원/월`;

for (let node of sub_wrapper.childNodes) {
  // 공백 텍스트 없애기
  if (node.element !== "div") {
    sub_wrapper.removeChild(node);
  }
}

if (sub_wrapper.hasChildNodes()) {
  // 장바구니 카운트 하기
  count.style.display = "inline-block";
  count.textContent = sub_wrapper.childNodes.length;
}

basket_button.addEventListener("click", () => {
  // 버튼 누르면 장바구니 display=none으로
  basket_wrapper.classList.add("click");
  basket_button.style.display = "none";
  aca_wrapper.classList.remove("click");
});

basket_wrapper.childNodes[1].addEventListener("click", () => {
  // 장바구니 숨기기
  basket_wrapper.classList.remove("click");
  basket_button.style.display = "flex";

  aca_wrapper.classList.add("click");

  if (aca_wrapper.className === "section") {

    basket_button.style.left = null;
    basket_button.style.right = "5rem";
  } else {
    basket_button.style.left = "6rem";
    basket_button.style.right = null;
  }

});

for (let sub of subs) {
  sub.addEventListener("click", (e) => {


    sub_wrapper.removeChild(e.target.parentNode); // 장바구니 빼기

    classes = document.querySelectorAll(".classes");
    sum = 0;
    console.log(classes);
    for (let c of classes) {
      let intPayment = Number.parseInt(c.dataset.expense);
      sum += intPayment;
    }
    $sum.innerHTML = `총액 : ${sum}원/월`;

    if (!sub_wrapper.hasChildNodes()) {
      // 장바구니 내용이 없으면 비었다고 표시
      const h1 = document.createElement("h1");
      sub_wrapper.appendChild(h1);
      h1.innerHTML = `장바구니가 비었습니다 <i class="xi-emoticon-sad xi-2x"></i>`;
      count.style.display = "none";
    } else if (sub_wrapper.hasChildNodes()) {
      count.style.display = "inline-block";
      count.textContent = sub_wrapper.childNodes.length;
    }

  });
}

