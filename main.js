// ========================================
// GERMAN CONSTRUCTION COMPANY - MAIN JS
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // ========================================
  // MOBILE NAVIGATION TOGGLE
  // ========================================
  
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', function() {
      navbarToggle.classList.toggle('active');
      navbarMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navbarToggle.contains(event.target) || navbarMenu.contains(event.target);
      if (!isClickInsideNav && navbarMenu.classList.contains('active')) {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
      }
    });
  }
  
  // ========================================
  // NAVBAR SCROLL EFFECT
  // ========================================
  
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // ========================================
  // ACTIVE NAVIGATION HIGHLIGHTING
  // ========================================
  
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-link');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // ========================================
  // SMOOTH SCROLLING FOR ANCHOR LINKS
  // ========================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ========================================
  // SCROLL REVEAL ANIMATIONS
  // ========================================
  
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(element => {
    revealOnScroll.observe(element);
  });
  
  // ========================================
  // FORM VALIDATION
  // ========================================
  
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form fields
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const message = document.getElementById('message');
      
      let isValid = true;
      
      // Simple validation
      if (!name.value.trim()) {
        showError(name, 'Bitte geben Sie Ihren Namen ein');
        isValid = false;
      } else {
        clearError(name);
      }
      
      if (!email.value.trim() || !isValidEmail(email.value)) {
        showError(email, 'Bitte geben Sie eine gültige E-Mail-Adresse ein');
        isValid = false;
      } else {
        clearError(email);
      }
      
      if (!message.value.trim()) {
        showError(message, 'Bitte geben Sie eine Nachricht ein');
        isValid = false;
      } else {
        clearError(message);
      }
      
      if (isValid) {
        // Show success message
        showSuccessMessage();
        contactForm.reset();
      }
    });
  }
  
  function showError(input, message) {
    const formGroup = input.parentElement;
    const existingError = formGroup.querySelector('.error-message');
    
    if (existingError) {
      existingError.textContent = message;
    } else {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.style.color = 'var(--accent-red)';
      errorDiv.style.fontSize = 'var(--text-sm)';
      errorDiv.style.marginTop = 'var(--space-2)';
      errorDiv.textContent = message;
      formGroup.appendChild(errorDiv);
    }
    
    input.style.borderColor = 'var(--accent-red)';
  }
  
  function clearError(input) {
    const formGroup = input.parentElement;
    const existingError = formGroup.querySelector('.error-message');
    
    if (existingError) {
      existingError.remove();
    }
    
    input.style.borderColor = 'var(--neutral-300)';
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: var(--accent-green);
      color: white;
      padding: var(--space-4) var(--space-6);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-xl);
      z-index: var(--z-tooltip);
      animation: fadeInUp 0.3s ease-out;
    `;
    successDiv.textContent = 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.';
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
      successDiv.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(() => successDiv.remove(), 300);
    }, 4000);
  }
  
  // ========================================
  // YEAR UPDATE FOR FOOTER
  // ========================================
  
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
