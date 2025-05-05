// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Modal Functionality
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const startNowBtn = document.getElementById('startNowBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const modalCloseButtons = document.querySelectorAll('.modal-close');

function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(loginModal);
});

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(registerModal);
});

startNowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(registerModal);
});

modalCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal-overlay');
        closeModal(modal);
    });
});

// Close modal when clicking outside
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal(overlay);
        }
    });
});

// Form Submission (Demo)
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('ورود با موفقیت انجام شد!');
    closeModal(loginModal);
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('رمز عبور و تکرار آن باید یکسان باشند.');
        return;
    }
    
    alert('ثبت نام با موفقیت انجام شد!');
    closeModal(registerModal);
});

// Newsletter Form (Demo)
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('.newsletter-input');
    if (emailInput.value) {
        alert('ایمیل شما با موفقیت در خبرنامه ثبت شد.');
        emailInput.value = '';
    }
});

