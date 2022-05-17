const map_button = document.querySelector(".map"); // map버튼
const aca_wrapper = document.querySelector(".section"); // info

map_button.addEventListener("click", () => {
  // map누르면 info 나오게
  aca_wrapper.classList.add("click");
});

aca_wrapper.childNodes[1].addEventListener("click", () => {
  // info 숨기기
  aca_wrapper.classList.remove("click");
  button.style.display = "flex";
});
