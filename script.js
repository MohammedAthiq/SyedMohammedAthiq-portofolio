        // ---------- EmailJS Initialization ----------
        (function () {
            emailjs.init("6G_hY4YJEDtCY4Jaj");
        })();

        // ---------- Stars Animation ----------
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }

        // ---------- Navigation Scroll Effect ----------
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // ---------- Mobile Menu Toggle ----------
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // ---------- Typing Effect ----------
        const typingText = document.querySelector('.typing-text');
        const texts = [
            'Programmer Analyst Trainee at Cognizant',
            'Computer Science Graduate',
            'Python Programmer',
            'Java Programmer',
            'AI & ML Enthusiast',
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[textIndex];
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }
        type();

        // ---------- Scroll to Top Button ----------
        const scrollTopBtn = document.getElementById('scrollTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // ---------- Contact Form Submission ----------

        const contactForm = document.getElementById('contactForm');
        const sendBtn = document.getElementById('sendBtn');
        const formMessage = document.getElementById('formMessage');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Disable send button while sending
            sendBtn.disabled = true;
            sendBtn.textContent = 'Sending...';

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                title: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            emailjs.send("service_yg5p6vs", "template_p1r2d2v", formData)
                .then(() => {
                    // Show success message in-page
                    formMessage.style.color = 'green';
                    formMessage.textContent = '✅ Thank you! Your message has been sent.';

                    contactForm.reset();
                }, (error) => {
                    // Show error message in-page
                    formMessage.style.color = 'red';
                    formMessage.textContent = '❌ Oops… something went wrong. Please try again.';
                    console.error(error);
                })
                .finally(() => {
                    // Re-enable send button
                    sendBtn.disabled = false;
                    sendBtn.textContent = 'Send Message';
                });
        });

        // ---------- Smooth Scroll Animation for Sections ----------
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'all 0.6s ease';
            observer.observe(section);
        });

        // ---------- Active Nav Link on Scroll ----------
        const sections = document.querySelectorAll('section');
        const navLinksAll = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
        
    
