/* ===================================================================
   PINE PILLARS VENTURES - INTERACTIVE SCRIPTS
   Handles Navigation, Catalog Filters, WhatsApp Order Generator,
   Interactive Estimator, FAQ Accordion, and Clipboard Actions
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initCatalogFilters();
  initQuoteCalculator();
  initFaqAccordion();
  initClipboardButtons();
  initContactForm();
  initBackToTop();
});

// 1. STICKY HEADER & ACTIVE SCROLL STATE
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // ScrollSpy only for in-page hash links if any
    let current = '';
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          link.classList.remove('active');
          if (href === `#${current}`) {
            link.classList.add('active');
          }
        }
      });
    }
  });

  // Highlight current page based on pathname
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// 2. MOBILE MENU & DRAWER CONTROLLER
function initMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.getElementById('nav-overlay');
  const closeBtn = document.getElementById('drawer-close');

  if (!toggleBtn || !navLinks) return;

  function openMenu() {
    navLinks.classList.add('active');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    navLinks.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('active');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
    }
  });
}

// 3. CATALOG FILTER TABS
function initCatalogFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const productCards = document.querySelectorAll('.product-card');

  if (!filterTabs.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 4. INTERACTIVE QUOTE & ORDER ESTIMATOR
function initQuoteCalculator() {
  const categorySelect = document.getElementById('calc-category');
  const volumeSelect = document.getElementById('calc-volume');
  const locationSelect = document.getElementById('calc-location');
  const subtotalEl = document.getElementById('calc-subtotal');
  const deliveryEl = document.getElementById('calc-delivery');
  const discountEl = document.getElementById('calc-discount');
  const totalEl = document.getElementById('calc-total');
  const waBtn = document.getElementById('calc-whatsapp-btn');

  if (!categorySelect || !volumeSelect || !locationSelect) return;

  function updateEstimate() {
    const catBasePrice = parseFloat(categorySelect.value) || 0;
    const catName = categorySelect.options[categorySelect.selectedIndex].text;
    const volMultiplier = parseFloat(volumeSelect.value) || 1;
    const volName = volumeSelect.options[volumeSelect.selectedIndex].text;
    const delCost = parseFloat(locationSelect.value) || 0;
    const locName = locationSelect.options[locationSelect.selectedIndex].text;

    // Wholesale discount logic
    let discountRate = 0;
    if (volMultiplier >= 10) {
      discountRate = 0.15; // 15% discount on bulk pallet
    } else if (volMultiplier >= 3) {
      discountRate = 0.08; // 8% contractor bundle discount
    }

    const rawSubtotal = catBasePrice * volMultiplier;
    const discountAmount = rawSubtotal * discountRate;
    const finalSubtotal = rawSubtotal - discountAmount;
    const grandTotal = finalSubtotal + delCost;

    if (subtotalEl) subtotalEl.textContent = `GH₵ ${rawSubtotal.toLocaleString()}`;
    if (discountEl) discountEl.textContent = discountAmount > 0 ? `- GH₵ ${discountAmount.toLocaleString()}` : `GH₵ 0`;
    if (deliveryEl) deliveryEl.textContent = `GH₵ ${delCost.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `GH₵ ${grandTotal.toLocaleString()}`;

    // Generate dynamic WhatsApp message
    const msg = `Hello Pine Pillars Ventures! I would like an estimate for:\n\n` +
      `• Product: ${catName}\n` +
      `• Order Size: ${volName}\n` +
      `• Delivery Destination: ${locName}\n` +
      `• Estimated Total: GH₵ ${grandTotal.toLocaleString()}\n\n` +
      `Please confirm stock availability and dispatch time. Thank you!`;

    const encodedMsg = encodeURIComponent(msg);
    if (waBtn) {
      waBtn.href = `https://wa.me/233555736123?text=${encodedMsg}`;
    }
  }

  categorySelect.addEventListener('change', updateEstimate);
  volumeSelect.addEventListener('change', updateEstimate);
  locationSelect.addEventListener('change', updateEstimate);

  // Initialize values
  updateEstimate();
}

// 5. FAQ ACCORDION
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close others
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      item.classList.toggle('active', !isActive);
    });
  });
}

// 6. COPY TO CLIPBOARD BUTTONS
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
        showToast(`Copied "${textToCopy}" to clipboard!`);

        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);
      }).catch(err => {
        showToast(`Failed to copy: ${err}`);
      });
    });
  });
}

// 7. CONTACT FORM SUBMISSION WITH WHATSAPP BRIDGE
function initContactForm() {
  const form = document.getElementById('contact-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#cf-name')?.value || 'Valued Customer';
    const phone = form.querySelector('#cf-phone')?.value || 'Not provided';
    const subject = form.querySelector('#cf-subject')?.value || 'General Inquiry';
    const message = form.querySelector('#cf-message')?.value || '';

    showToast(`Thank you, ${name}! Your inquiry has been logged.`);

    // Build WhatsApp message for instant resolution
    const waText = `*Inquiry from Pine Pillars Website*\n\n` +
      `• Name: ${name}\n` +
      `• Phone/Contact: ${phone}\n` +
      `• Subject: ${subject}\n` +
      `• Message: ${message}\n\n` +
      `Looking forward to doing business with Pine Pillars Ventures!`;

    const encoded = encodeURIComponent(waText);
    const waUrl = `https://wa.me/233555736123?text=${encoded}`;

    // Prompt user to open WhatsApp directly
    setTimeout(() => {
      const confirmWA = confirm("Would you also like to open WhatsApp to send your message directly to Pine Pillars Ventures (+233 55 573 6123)?");
      if (confirmWA) {
        window.open(waUrl, '_blank');
      }
      form.reset();
    }, 600);
  });
}

// 8. BACK TO TOP & TOAST UTILITY
function initBackToTop() {
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast toast-success';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
