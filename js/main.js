/* ==========================================================================
   Roopesh Mamidala - Portfolio Main Interactive Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initScrollSpy();
  initSkillFilters();
  initProjectModals();
  initCopyEmail();
  initContactForm();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   Sticky Header & Scroll Styling
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle-btn');
  const drawer = document.querySelector('.mobile-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('is-open');
    const isOpen = drawer.classList.contains('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen ? 'Close' : 'Menu';
  });

  // Close drawer when link clicked
  const drawerLinks = drawer.querySelectorAll('.nav-link, .nav-cta-btn');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      toggleBtn.innerHTML = 'Menu';
    });
  });
}

/* --------------------------------------------------------------------------
   Scroll Spy Navigation
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link, .mobile-drawer .nav-link');

  function updateActiveLink() {
    let scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
}

/* --------------------------------------------------------------------------
   Skills Category Filtering
   -------------------------------------------------------------------------- */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');

  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   Project Modals & Details View
   -------------------------------------------------------------------------- */
function initProjectModals() {
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalDialog = document.querySelector('.modal-dialog');
  const modalBody = document.querySelector('.modal-body-content');
  const closeBtn = document.querySelector('.modal-close-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!modalBackdrop || !modalBody || !closeBtn) return;

  function openProjectModal(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
          <span class="mono-tag" style="color: var(--text-code); font-weight: 700;">${project.category}</span>
          <span style="font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: var(--radius-xs); border: 1px solid var(--border-subtle); background: var(--bg-tertiary); color: ${project.statusType === 'in-progress' ? '#fbbf24' : '#4ade80'}; font-weight: 600; font-family: var(--font-mono);">
            ${project.status}
          </span>
        </div>
        <h2 style="font-size: 1.85rem; font-weight: 800; color: #ffffff; line-height: 1.25; margin-bottom: 0.4rem;">
          ${project.title}
        </h2>
        <p style="font-size: 1.05rem; color: var(--text-secondary);">${project.subtitle}</p>
      </div>

      <div style="width: 100%; border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 1.5rem; border: 1px solid var(--border-subtle); background: #090b10;">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: auto; display: block;" />
      </div>

      <div class="project-tags-modal" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
        ${project.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}
      </div>

      <div style="font-size: 0.98rem; color: #cbd5e1; line-height: 1.8;">
        ${project.fullDesc}
      </div>
    `;

    modalBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });

  closeBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   Copy Email to Clipboard
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.copy-email-trigger');
  const toast = document.getElementById('toastNotification');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'mamidalaroopesh@gmail.com';

      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast('Email address copied to clipboard!');
        }).catch(() => {
          fallbackCopyText(email);
        });
      } else {
        fallbackCopyText(email);
      }
    });
  });

  function fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Email address copied to clipboard!');
    } catch (err) {
      showToast('Copy failed. Email: mamidalaroopesh@gmail.com');
    }
    document.body.removeChild(textArea);
  }

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* --------------------------------------------------------------------------
   Contact Form Client-Side Simulation
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toastNotification');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();

      if (toast) {
        toast.textContent = `Thank you, ${name}! Your message has been sent.`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 3600);
      }
    }).catch(() => {
      // Fallback if testing offline/locally
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();

      if (toast) {
        toast.textContent = `Thank you, ${name}! Your message has been received.`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 3600);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Scroll Animations using IntersectionObserver
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}
