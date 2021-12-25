const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", e => {
    e.preventDefault();

    sidebar.classList.toggle("collapse");
})