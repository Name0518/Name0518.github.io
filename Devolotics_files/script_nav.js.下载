const header_container = document.getElementById("header_container");
const navigator_container = document.getElementById("navigator_container");
const menu = document.getElementById("sidebarLightbox_container");

setTimeout(() => {
    header_container.style.opacity = "1";
    if (navigator_container) {
        navigator_container.style.opacity = "1";
    }
}, 500);

function toggleMenu() {
    if (menu.offsetLeft > 0) {
        menu.style.left = 0;
        menu.style.opacity = 1;
    } else {
        menu.style.left = window.innerWidth;
        menu.style.opacity = 0;
    }
}
