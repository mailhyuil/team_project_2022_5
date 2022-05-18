const button = document.querySelector(".basket-button");
const map_button = document.querySelector(".map"); // map버튼
const aca_wrapper = document.querySelector(".section"); // info

map_button.addEventListener("click", () => {
  // map누르면 info 나오게
  aca_wrapper.classList.add("click");
});

aca_wrapper.childNodes[1].addEventListener("click", () => {
  // 장바구니 숨기기
  aca_wrapper.classList.remove("click");
  aca_wrapper.style.display = "flex";
});

basket_wrapper.childNodes[1].addEventListener("click", () => {
  // 장바구니 숨기기
  basket_wrapper.classList.remove("click");
  aca_wrapper.style.display = "flex";
});
