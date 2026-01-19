document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    // Close mobile nav when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (document.body.classList.contains('nav-open')) {
                document.body.classList.remove('nav-open');
            }
        });
    });

    // 2. Fade-in on Scroll Animation
    const fadeElems = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElems.forEach(elem => fadeObserver.observe(elem));

    // 3. Scrollytelling Feature
    const steps = document.querySelectorAll('.step');
    const visualSteps = document.querySelectorAll('.visual-step');

    const scrollyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stepNumber = entry.target.dataset.step;
                
                // Update text steps
                steps.forEach(step => {
                    step.classList.toggle('active', step.dataset.step === stepNumber);
                });

                // Update visual steps
                visualSteps.forEach(visual => {
                    visual.classList.toggle('active', visual.dataset.step === stepNumber);
                });
            }
        });
    }, { threshold: 0.6, rootMargin: "-50px 0px -50px 0px" });

    steps.forEach(step => scrollyObserver.observe(step));
    
    // Make first step active by default
    if (steps.length > 0) {
        steps[0].classList.add('active');
        visualSteps[0].classList.add('active');
    }


    // 4. Form Validation
    const form = document.getElementById('contact-form');
    const fullName = document.getElementById('full-name');
    const workEmail = document.getElementById('work-email');
    const schoolName = document.getElementById('school-name');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = validateForm();
        if (isValid) {
            // In a real app, you would submit the form here.
            alert('Thank you! Your demo request has been submitted.');
            form.reset();
        }
    });

    const showError = (input, message) => {
        const formGroup = input.parentElement;
        input.classList.add('error');
        const error = formGroup.querySelector('.error-message');
        error.textContent = message;
    };

    const showSuccess = (input) => {
        const formGroup = input.parentElement;
        input.classList.remove('error');
        const error = formGroup.querySelector('.error-message');
        error.textContent = '';
    };

    const isEmailValid = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        let success = true;
        const nameValue = fullName.value.trim();
        const emailValue = workEmail.value.trim();
        const schoolValue = schoolName.value.trim();

        if (nameValue === '') {
            showError(fullName, 'Full Name is required');
            success = false;
        } else {
            showSuccess(fullName);
        }

        if (emailValue === '') {
            showError(workEmail, 'Email is required');
            success = false;
        } else if (!isEmailValid(emailValue)) {
            showError(workEmail, 'Email is not valid');
            success = false;
        } else {
            showSuccess(workEmail);
        }

        if (schoolValue === '') {
            showError(schoolName, 'School / District Name is required');
            success = false;
        } else {
            showSuccess(schoolName);
        }
        
        return success;
    };
});