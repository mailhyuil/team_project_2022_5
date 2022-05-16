const button = document.querySelector('.basket-button');
const basket_wrapper = document.querySelector('.wrapper');
const subs = document.querySelectorAll('.sub');
const sub_wrapper = document.querySelector('.sub-wrapper');
const count = document.querySelector('.count');

for (let node of sub_wrapper.childNodes) {
    if (node.element !== 'div') {
        sub_wrapper.removeChild(node);
    }
}

if (sub_wrapper.hasChildNodes()) {
    count.style.display = 'inline-block';
    count.textContent = sub_wrapper.childNodes.length;
}


button.addEventListener('click', () => {
    basket_wrapper.classList.add('click');
    button.style.display = "none";
})

basket_wrapper.childNodes[1].addEventListener('click', () => {
    basket_wrapper.classList.remove('click');
    button.style.display = "flex";
});

console.log(sub_wrapper.childNodes);

for (let sub of subs) {
    sub.addEventListener('click', (e) => {
        console.log(e.target);
        console.log(sub_wrapper);
        sub_wrapper.removeChild(e.target.parentNode);
        if (!sub_wrapper.hasChildNodes()) {
            const h1 = document.createElement('h1');
            sub_wrapper.appendChild(h1);
            h1.innerHTML = `장바구니가 비었습니다 <i class="xi-emoticon-sad xi-2x"></i>`;
            count.style.display = 'none';
        } else if (sub_wrapper.hasChildNodes()) {
            count.style.display = 'inline-block';
            count.textContent = sub_wrapper.childNodes.length;
        }
    })
}

