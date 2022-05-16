const button = document.querySelector('.basket-button');
const basket_wrapper = document.querySelector('.wrapper');

button.addEventListener('click', () => {
    basket_wrapper.classList.add('click');
    button.style.display = "none";
})

basket_wrapper.childNodes[1].addEventListener('click', () => {
    basket_wrapper.classList.remove('click');
    button.style.display = "flex";
});