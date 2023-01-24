const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

 // Activate Bootstrap scrollspy on the main nav element
 const mainNav = document.body.querySelector('#mainNav');
 if (mainNav) {
     new bootstrap.ScrollSpy(document.body, {
         target: '#mainNav',
         offset: 72,
     });
 };




