document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".header-menu-link");
    const sections = document.querySelectorAll("section");
    const logoLink = document.querySelector(".header-logo");
    const footer = document.querySelector("#footer");
    let isScrolling = false; 

    const updateActiveLink = () => {
        if (isScrolling) return;

        const scrollPos = window.scrollY + window.innerHeight; 
        const footerTop = footer.offsetTop;
        const footerHeight = footer.offsetHeight;
        
        if (window.scrollY === 0) {
            menuLinks.forEach(link => link.classList.remove("active"));
            return;
        }
        
        if (scrollPos >= footerTop && scrollPos <= footerTop + footerHeight) {
            menuLinks.forEach(link => link.classList.remove("active"));
            document.querySelector('.header-menu-link[href="#footer"]').classList.add("active");
            return;
        }
        
        if (scrollPos < footerTop) {
            menuLinks.forEach(link => link.classList.remove("active"));
        }

        sections.forEach((section, index) => {
            const offsetTop = section.offsetTop - 80; 
            const offsetBottom = offsetTop + section.offsetHeight;

            if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
                menuLinks.forEach(link => link.classList.remove("active"));
                menuLinks[index].classList.add("active");
            }
        });
    };
    
    const scrollToSection = (event) => {
        event.preventDefault(); 
        const targetId = event.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            isScrolling = true; 
            menuLinks.forEach(link => link.classList.remove("active"));
            event.currentTarget.classList.add("active");
            targetSection.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                isScrolling = false;
            }, 800); 
        }
    };
    
    const scrollToTop = (event) => {
        event.preventDefault(); 
        isScrolling = true;
        menuLinks.forEach(link => link.classList.remove("active"));
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
            isScrolling = false;
        }, 800); 
    };

        menuLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });
    logoLink.addEventListener("click", scrollToTop);
    
    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});