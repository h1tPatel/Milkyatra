const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



// FAQs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.querySelector('.faq-question').addEventListener('click', function () {
        faq.classList.toggle('open');

        const answer = faq.querySelector('.faq-answer');
        if (faq.classList.contains('open')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});
