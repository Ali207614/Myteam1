let menuIcon = document.querySelector(".hamburg-menu");
let sidebar = document.querySelector(".sidebar");
let d = document.querySelector("#overlay")
let e = document.querySelector("body")
let inp = document.querySelector(".inp")
let label = document.querySelector(".lbl")
let plus = document.querySelector(".about-link1")
let over = document.querySelector(".over")
let rotate = document.querySelector(".rotate1")

const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("change");
    d.classList.toggle("visible")
    navbar.classList.toggle("change1");

})
d.addEventListener('click', function () {
    sidebar.classList.remove("change");
    d.classList.remove("visible")
    e.classList.remove("inner")
    navbar.classList.remove("change1");
});

plus.addEventListener('click', function () {
    over.classList.toggle("overlay1")
    rotate.classList.toggle("rotate")
});