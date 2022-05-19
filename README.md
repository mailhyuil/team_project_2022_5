# 내가 만든것(이민욱)

### main.html

### academy-info.html

### main.css

### academy-info.css

### academy-info.js

# 연동되있는 코드가 있는 것

### basket.js

- ````button.addEventListener("click", () => {
    // 버튼 누르면 장바구니 display=none으로
    basket_wrapper.classList.add("click");
    button.style.display = "none";
    aca_wrapper.classList.remove("click");
  });```
  ````
- `aca_wrapper.classList.remove("click");` 부분

- ````basket_wrapper.childNodes[1].addEventListener("click", () => {
    // 장바구니 숨기기
    basket_wrapper.classList.remove("click");
    button.style.display = "flex";
    aca_wrapper.classList.add("click");
  });```
  ````
- `aca_wrapper.classList.add("click");` 부분
