document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeButton = document.querySelector(".header-mobile-menu-button-close");
  const logoLink = document.querySelector(".header-mobile-menu-logo");
  const mobileMenuButton1 = document.getElementById("header-mobile-menu-buttons-item-button1");
  const mobileMenuButton2 = document.getElementById("header-mobile-menu-buttons-item-button2");


  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-visible");
  });

  closeButton.addEventListener("click", () => {
    mobileMenu.classList.remove("is-visible");
  });

  logoLink.addEventListener("click", (e) => {
    e.preventDefault(); 
    mobileMenu.classList.remove("is-visible");
    window.location.hash = "#intro";
  });

   mobileMenuButton1.addEventListener("click", (e) => {
    e.preventDefault(); 
    mobileMenu.classList.remove("is-visible");
    window.location.hash = "#contactus";
   });
  
  mobileMenuButton2.addEventListener("click", (e) => {    
    mobileMenu.classList.remove("is-visible");    
  });

  const menuLinks = document.querySelectorAll(".header-mobile-menu-link");
  menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      mobileMenu.classList.remove("is-visible");
      setTimeout(() => {
        window.location.hash = e.target.getAttribute("href");
      }, 300);
    });
  });
  
});

