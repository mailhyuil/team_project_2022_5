const map_button = document.querySelectorAll(".map-btn"); // map버튼
const aca_wrapper = document.querySelector(".section"); // info
const put_in_btn = document.querySelector(".put-in-btn");
const aside = document.querySelector(".aside");
const btn = document.querySelector(".btn");
const btnOpen = document.querySelector(".btn_open");

for (let btn of map_button) {
  btn.addEventListener("click", () => {
    console.log(put_in_btn.className);
    // map누르면 info 나오게
    console.log(basket_wrapper.className);
    if (basket_wrapper.className === "wrapper click") {
      return;
    } else if (basket_wrapper.className === "wrapper") {
      aca_wrapper.classList.toggle("click");
    }

    if (aca_wrapper.className === "section click") {
      button.style.left = "6rem";
      button.style.right = null;
    } else {
      button.style.left = null;
      button.style.right = "5rem";
    }

    aside.classList.add("click");

    if (aca_wrapper.className === "section") aside.classList.remove("click");
  });
}
put_in_btn.addEventListener("click", () => {
  aca_wrapper.classList.remove("click");
  aside.classList.remove("click");
});

btn.addEventListener("click", () => {
  aside.classList.toggle("click");
  if (aca_wrapper.className === "section click")
    aca_wrapper.classList.remove("click");
});
// bascket.js
// basket_wrapper click 에 aca_wrapper add
// button click 에 aca_wrapper remove
// 들어가있음
