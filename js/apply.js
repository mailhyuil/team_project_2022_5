
const aside = document.querySelector(".aside");
const btn = document.querySelector(".btn");
const btnOpen = document.querySelector(".btn_open");

btn.addEventListener("click", () => {
    aside.classList.toggle("click");
});

// btnOpen.addEventListener("click", () => {
//     if (aside.style.display == "none") {
//         aside.style.display = "block";
//     }
//     btnOpen.className = "btn";
// });