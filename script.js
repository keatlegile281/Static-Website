document.addEventListener('DOMContentLoaded', () => {
    
    // --- Feature 1: Typewriter Effect ---
    const heroTextElement = document.querySelector('.hero p');
    if (heroTextElement) {
        const originalText = heroTextElement.innerText;
        heroTextElement.innerText = '';
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroTextElement.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        }
        setTimeout(typeWriter, 500);
    }

    // --- Feature 2: Scroll Reveal ---
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .section-title').forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // --- Feature 3: Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== "#") { // Only scroll if it's a real section link
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // --- Feature 4: Modal Logic (Fixed) ---
    const modal = document.getElementById("contactModal");
    const closeBtn = document.querySelector(".close-btn");
    // This finds ALL buttons that should open the form
    const allFormButtons = document.querySelectorAll('.open-form-btn, #openContactBtn');

    allFormButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = "block";
        });
    });

    if (closeBtn) {
        closeBtn.onclick = () => { modal.style.display = "none"; }
    }

    window.onclick = (event) => {
        if (event.target == modal) { modal.style.display = "none"; }
    }
});

const terminalForm = document.getElementById('terminalForm');
const submitBtn = document.getElementById('submitBtn');

if (terminalForm) {
    terminalForm.onsubmit = function() {
        submitBtn.innerHTML = "UPLOADING_DATA...";
        submitBtn.classList.add('Loading');
        // The form will still send to Formspree naturally
    };
}