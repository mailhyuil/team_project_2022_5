const map_button = document.querySelectorAll(".map-btn"); // map버튼
const aca_wrapper = document.querySelector(".section"); // info
const put_in_btn = document.querySelector(".put-in-btn");
const aside = document.querySelector(".aside");
const aside_btn = document.querySelector(".aside_btn");
const btnOpen = document.querySelector(".btn_open");
const left_arrow = aside.querySelector(".xi-angle-left.xi-2x");
const right_arrow = aside.querySelector(".xi-angle-right.xi-2x");

for (let btn of map_button) {
  btn.addEventListener("click", () => {
    // map누르면 info 나오게

    aca_wrapper.classList.toggle("click");

    if (aca_wrapper.className === "section click") {
      basket_wrapper.classList.remove("click");
      basket_button.style.display = "flex";
      basket_button.style.left = "6rem";
      basket_button.style.right = null;
    } else {
      basket_button.style.left = null;
      basket_button.style.right = "5rem";
    }

    aside.classList.add("click");

    if (aca_wrapper.className === "section") aside.classList.remove("click");
  });
}

put_in_btn.addEventListener("click", () => {
  aca_wrapper.classList.remove("click");
  aside.classList.remove("click");

  if (aca_wrapper.className === "section") {
    basket_button.style.left = null;
    basket_button.style.right = "5rem";
  } else {
    basket_button.style.left = "6rem";
    basket_button.style.right = null;
  }
});

aside_btn.addEventListener("click", () => {
  aside.classList.toggle("click");
  if (aside.className === "aside click") {
    left_arrow.style.display = "none";
    right_arrow.style.display = "inline-block";
  } else {
    left_arrow.style.display = "inline-block";
    right_arrow.style.display = "none";
  }
  if (aca_wrapper.className === "section click")
    aca_wrapper.classList.remove("click");
});
