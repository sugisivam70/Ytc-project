// product tab switcher


//  slides = document.querySelectorAll('.hero-slide');
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.hero-slide');
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    slides[current].classList.add('prev');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
    slides[(current - 1 + slides.length) % slides.length].classList.remove('prev');
  }, 10000);
});


// Intersection Observer for Navbar Animation
  // Navbar slide-in and active link highlight
document.addEventListener("DOMContentLoaded", function() {
  // Navbar slide-in
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    setTimeout(() => {
      navbar.classList.add('visible');
    }, 200);
  }
  
  // Active link highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links li a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });


  // Work stats count-up animation
  function animateCount(el, target, duration) {
    let start = 0;
    let startTime = null;
    function updateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      el.textContent = Math.floor(progress * (target - start) + start);
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(updateCount);
  }
  const statsSection = document.querySelector('.work-stats-fadein');
  let counted = false;
  if (statsSection) {
    const statsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          document.querySelectorAll('.work-stat-number').forEach(el => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            animateCount(el, target, 1550);
          });
          statsObserver.unobserve(statsSection);
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }
});


// Intersection Observer for Hero Section Animations
  document.addEventListener("DOMContentLoaded", function() {
  const heroEls = document.querySelectorAll('.hero-fadein, .hero-h1-animate, .hero-p-animate, .hero-btn-animate');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  heroEls.forEach(el => observer.observe(el));
});

// Intersection Observer for Work Section Animations
document.addEventListener("DOMContentLoaded", function() {
  const workCards = document.querySelectorAll('.work-card-fadein');
  if (workCards.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    workCards.forEach(el => observer.observe(el));
  }
});


// Intersection Observer for About Section Animations
  document.addEventListener("DOMContentLoaded", function() {
  // Animate all about section elements with fadein classes
  const aboutEls = document.querySelectorAll('.about-fadein, .about-boxes-fadein, .about-note-fadein');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  aboutEls.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function() {
  const aboutBullets = document.querySelectorAll('.about-bullets-fadein, .about-bullet-slideup');
  if (aboutBullets.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    aboutBullets.forEach(el => observer.observe(el));
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const infraEls = document.querySelectorAll('.infra-fadein, .infra-item-slideup');
  if (infraEls.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    infraEls.forEach(el => observer.observe(el));
  }
});

// Intersection Observer for Product Section Animations
document.addEventListener("DOMContentLoaded", function() {
  // Product section animations
  const productEls = document.querySelectorAll(
    '.product-title-fadein, .product-card-zoomin,.product-p-slideleft, .product-p-slideright'
  );
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.599 });
  productEls.forEach(el => observer.observe(el));
});

// Intersection Observer for machines Section Animations
document.addEventListener("DOMContentLoaded", function() {
  const machineSections = document.querySelectorAll('.machine-slide-left, .machine-slide-right');
  if (machineSections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    machineSections.forEach(el => observer.observe(el));
  }
});
// Count-up animation for work stats
function animateCount(el, target, duration) {
  let start = 0;
  let startTime = null;
  function updateCount(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    el.textContent = Math.floor(progress * (target - start) + start);
    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = target;
    }
  }
  requestAnimationFrame(updateCount);
}

// Intersection Observer for Work Stats Count Animation
document.addEventListener("DOMContentLoaded", function() {
  const statsSection = document.querySelector('.work-stats-fadein');
  let counted = false;
  if (statsSection) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          document.querySelectorAll('.work-stat-number').forEach(el => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            animateCount(el, target, 1200);
          });
          observer.unobserve(statsSection);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  }
});
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight - 80 && rect.bottom > 80
  );
}

function animateServiceBoxes() {
  document.querySelectorAll('.service-box').forEach(box => {
    if (isInViewport(box)) {
      box.style.opacity = '1';
      // Animation classes already set for each box, so just set opacity
    }
  });
}
window.addEventListener('scroll', animateServiceBoxes);
window.addEventListener('DOMContentLoaded', animateServiceBoxes);

// Intersection Observer for Services Section Animations
document.addEventListener("DOMContentLoaded", function() {
  // Service section grid and boxes scroll animation
  const serviceEls = document.querySelectorAll(
    '.service-fadein, .service-zoomin, .service-slideup, .service-box-fadein, .service-box-zoomin, .service-box-slideup'
  );
  if (serviceEls.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    serviceEls.forEach(el => observer.observe(el));
  }
}); 
// contect animation //

document.addEventListener("DOMContentLoaded", function() {
  const contactEls = document.querySelectorAll(
    '.contact-slide-down, .contact-slide-left, .contact-slide-right, .contact-slide-up, .contact-fadein'
  );
  if (contactEls.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    contactEls.forEach(el => observer.observe(el));
  }
});
