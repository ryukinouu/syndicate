const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const blurElements = document.querySelectorAll(".blur");
const hamburgerMenu = document.querySelector('.hamburger-menu');

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
        if (element.className == "bottom translate") {
            element.style.transform = `translate(-50%, ${scroll * speed}px)`;
        }
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height) * 1.8;
    })

    blurElements.forEach(element => {
        element.style.filter = `blur(${Math.min(scroll / 64, 8)}px)`;
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})

hamburgerMenu.addEventListener('click', () => {
    const contentY = content.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: contentY,
        behavior: 'smooth'
    });
});