const menuIcon = document.querySelector(".hamburger-menu");
const navLink1 = document.querySelector(".link1");
const navLink2 = document.querySelector(".link2");
const navLink3 = document.querySelector(".link3");
const navbarExt = document.querySelector(".nav-extension");

menuIcon.addEventListener("click", () => {
    navbarExt.classList.toggle("change");
});
navLink1.addEventListener("click", () => {
    navbarExt.classList.toggle("change");
});
navLink2.addEventListener("click", () => {
    navbarExt.classList.toggle("change");
});
navLink3.addEventListener("click", () => {
    navbarExt.classList.toggle("change");
});

if (window.innerWidth < 1000) {
    var lastScrollTop = 0;
    navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top="-100px";
        } else {
            navbar.style.top="0px";
        }
        lastScrollTop = scrollTop;
    })
}