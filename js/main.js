//Navigation bar effects on scroll

window.addEventListener("scroll" ,function(){
    const header =document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Portfolio section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const modalCloseBtn = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnMoreBtn.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtn.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});



//Our clients - Swiper
// var swiper = new Swiper(".client-swiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive navigation menu toggle
const menuBtn =document.querySelector(".nav-menu-btn");
const closeBtn =document.querySelector(".nav-close-btn");
const navigation =document.querySelector(".navigation");
const navItem =document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () =>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () =>{
    navigation.classList.remove("active");
});

navItem.forEach((navItem)=>{
    navItem.addEventListener("click", ()=>{
        navigation.classList.remove("active");
    })
})

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations



// git tags

