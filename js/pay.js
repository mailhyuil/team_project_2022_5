let classes = document.querySelectorAll(".classes");
const result = document.querySelector("#box h1");
const subs = document.querySelectorAll(".sub"); // 빼기 버튼
const classParent = document.querySelector("#edu_list");
for (let node of classParent.childNodes) {
    // 공백 텍스트 없애기
    if (node.element !== "div") {
        classParent.removeChild(node);
    }
}

let sum = 0;
for (let c of classes) {
    let intPayment = Number.parseInt(c.dataset.payment);
    sum += intPayment;
}

result.innerHTML = `총액 : ${sum}원/월`;

for (let sub of subs) {
    sub.addEventListener("click", (e) => {

        classParent.removeChild(e.target.parentNode); // 장바구니 빼기
        classes = document.querySelectorAll(".classes");
        sum = 0;
        console.log(classes);
        for (let c of classes) {
            let intPayment = Number.parseInt(c.dataset.payment);
            sum += intPayment;
        }
        result.innerHTML = `총액 : ${sum}원/월`;

        if (!classParent.hasChildNodes()) {
            // 장바구니 내용이 없으면 비었다고 표시

            const h1 = document.createElement("h1");
            classParent.appendChild(h1);
            h1.innerHTML = `장바구니가 비었습니다 <i class="xi-emoticon-sad xi-2x"></i>`;
        }
    });
}