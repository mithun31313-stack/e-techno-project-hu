// ================================
// TECHNO PROJECT HUB
// Main JavaScript
// ================================

// Welcome Message
console.log("Welcome to TECHNO PROJECT HUB 🚀");

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Navbar Shadow on Scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 30){
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    }else{
        navbar.style.boxShadow = "none";
    }

});

// Fade-in Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});
