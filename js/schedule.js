const classes = document.querySelectorAll('.classes'); // 장바구니 학원 불러오기
const table = document.querySelector('.table'); // 테이블 섹션
const tr = document.querySelectorAll('tr[data-day]') // 요일
const td = document.querySelectorAll('td'); // 시간
const sub = document.querySelector('.sub');

let dragged;
let schedules;

for (let t of tr) {
    t.classList.add('days');
} // tr의 class를 days로

for (let t of td) {
    t.classList.add('dates');
} // td의 class를 dates로

for (let c of classes) {
    c.setAttribute('draggable', true);
} // c의 attribute를 draggable로

table.addEventListener('dragover', (e) => {
    e.preventDefault();
})


table.addEventListener('mouseover', (e) => {
    if (e.target.className == 'classes') {
        let splitSchedules = [];
        schedules = e.target.dataset.schedule;
        splitSchedules = schedules.split(',');

        for (let schedule of splitSchedules) { // 수업 스케줄과 td의 날짜를 비교하여 컬러링
            for (let t of td) {
                if (t.parentNode.dataset.day == schedule.split('_')[0]
                    &&
                    t.dataset.date == schedule.split('_')[1]) {

                    t.style.backgroundColor = "yellow";

                    if (t.hasChildNodes()) {
                        t.style.backgroundColor = "red";
                    }
                }
            }
        }
    }
})


table.addEventListener('mouseout', (e) => {
    if (e.target.className == 'classes') {
        for (let t of td) {
            t.style.backgroundColor = '';
        }
    }
})


table.addEventListener('dragstart', (e) => {
    dragged = e.target;
})


table.addEventListener('dragenter', (e) => {
    if (e.target.className === 'dates' && e.target.style.backgroundColor != 'yellow') {
        e.target.style.backgroundColor = 'red';
    } else if (e.target.className === 'sub') {
        e.target.style.backgroundColor = 'red';
    }
})


table.addEventListener('dragleave', (e) => {
    if (e.target.className === 'dates' && e.target.style.backgroundColor != 'yellow') {
        e.target.style.backgroundColor = '';
    } else if (e.target.className === 'sub') {
        e.target.style.backgroundColor = '';
    }
})

table.addEventListener('drop', (e) => {
    // prevent default action (open as link for some elements)
    e.preventDefault();
    // move dragged elem to the selected drop target
    let schedule = dragged.dataset.schedule.split(',');
    let day;
    let date;

    /* 이미 정해진 스케줄 ALERT */
    if (e.target.className === "dates"
        &&
        e.target.parentNode.className === 'days') {
        for (let i = 0; i < schedule.length; i++) {
            day = schedule[i].split('_')[0];
            date = schedule[i].split('_')[1];
            for (let t of td) {
                if (t.dataset.date === date
                    &&
                    t.parentNode.dataset.day === day
                    &&
                    t.hasChildNodes()
                ) {
                    alert('이미 추가된 스케줄이 있습니다.');
                    return;
                }
            }
        }
    }

    /* 스케줄에 집어넣기 */
    if (e.target.className === "dates" // js에서 class 추가했음
        &&
        e.target.parentNode.className === 'days') { // js에서 class 추가했음

        const $dragged = dragged.cloneNode(true); // 드래그 요소 깊은 복사본 만들기

        for (let i = 0; i < schedule.length; i++) {
            day = schedule[i].split('_')[0];
            date = schedule[i].split('_')[1];
            //e.target과 같은 data type인 노드들을 전부 선택

            for (let t of td) {
                if (t.dataset.date === date
                    &&
                    t.parentNode.dataset.day === day
                ) {
                    t.appendChild($dragged.cloneNode(true));
                }
            }
        }
        dragged.parentNode.removeChild(dragged); // 장바구니에서 지우기
        e.target.style.backgroundColor = '';
    }

    /* 장바구니에 있는 학원 지우기 */
    if (e.target.className === "sub") {
        if (dragged.parentNode.className === 'basket') {
            dragged.parentNode.removeChild(dragged);
            for (let t of td) {
                t.style.backgroundColor = ''; // 장바구니에 있는 학원 지우고 배경색 지우기
            }
            e.target.style.backgroundColor = '';
            return;
        }

        for (let i = 0; i < schedule.length; i++) {
            day = schedule[i].split('_')[0];
            date = schedule[i].split('_')[1];

            for (let t of td) {
                if (t.dataset.date === date
                    &&
                    t.parentNode.dataset.day === day
                    &&
                    t != e.target) {
                    t.removeChild(t.firstChild);
                }
            }
        }
    }

    /* 스케줄표에 있는 학원 장바구니로 다시 집어넣기 */
    if (e.target.className === 'basket') {
        for (let i = 0; i < schedule.length; i++) {
            day = schedule[i].split('_')[0];
            date = schedule[i].split('_')[1];

            for (let t of td) {
                if (t.dataset.date === date
                    &&
                    t.parentNode.dataset.day === day
                    &&
                    t != e.target) {
                    t.removeChild(t.firstChild);
                }
            }
        }
        e.target.appendChild(dragged);
    }
})

// 스케줄에 클릭으로 추가
for (let c of classes) {
    c.addEventListener('click', () => {
        let schedule = c.dataset.schedule.split(',');
        let day;
        let date;


        for (let i = 0; i < schedule.length; i++) {
            day = schedule[i].split('_')[0];
            date = schedule[i].split('_')[1];
            for (let t of td) {
                if (t.dataset.date === date
                    &&
                    t.parentNode.dataset.day === day
                    &&
                    t.hasChildNodes()
                ) {
                    alert('이미 추가된 스케줄이 있습니다.');
                    return;
                }
            }
        }


        for (let i = 0; i < schedule.length; i++) {
            day = schedule[i].split('_')[0];
            date = schedule[i].split('_')[1];
            //e.target과 같은 data type인 노드들을 전부 선택
            for (let t of td) {
                if (t.dataset.date === date
                    &&
                    t.parentNode.dataset.day === day
                ) {
                    t.appendChild(c.cloneNode(true));

                }
            }
        }
        c.parentNode.removeChild(c); // 장바구니에서 지우기
    })
}