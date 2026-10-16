/**
 * PINE PILLARS VENTURES — CORE JAVASCRIPT
 * Handles mobile drawer, sticky header, dynamic product catalog rendering,
 * category filtering, search, WhatsApp integration, contact form, and dynamic year.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initCatalog();
  initContactForm();
  initDynamicYear();
});

/* ===================================================================
   1. STICKY HEADER & ACTIVE NAV LINKS
   =================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Highlight current page link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ===================================================================
   2. ACCESSIBLE MOBILE NAVIGATION DRAWER
   =================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-overlay');
  const closeBtn = document.querySelector('.drawer-close');

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    closeBtn?.focus();
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('active');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  closeBtn?.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close when clicking any nav link
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/* ===================================================================
   3. CATALOG RENDERING & FILTERING
   =================================================================== */
function initCatalog() {
  const grid = document.getElementById('products-container');
  if (!grid || typeof PRODUCTS === 'undefined') return;

  const isHomepage = grid.dataset.homepage === 'true';
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('catalog-search');

  // Check URL query param for category (e.g. ?category=mining)
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'all';

  let currentCategory = initialCategory;
  let searchQuery = '';

  // Set active filter button based on initial category
  filterButtons.forEach(btn => {
    if (btn.dataset.filter === currentCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  function render() {
    let filtered = PRODUCTS;

    // Filter by category
    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.specs.some(s => s.toLowerCase().includes(q))
      );
    }

    // If on homepage, only display top 6 items
    if (isHomepage && currentCategory === 'all' && searchQuery.trim() === '') {
      filtered = filtered.filter(p => p.featured);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1rem; background: var(--color-light-grey); border-radius: var(--radius-md); border: 1px dashed var(--border-light);">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" style="color: var(--color-charcoal-muted); margin-bottom: 0.75rem;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h4 style="color: var(--color-navy); margin-bottom: 0.35rem; font-size: 1.15rem;">No matching supplies found</h4>
          <p style="color: var(--color-charcoal-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">Try adjusting your search keywords or browsing all categories.</p>
          <button class="btn btn-outline btn-sm" id="btn-reset-filters">Reset Filters</button>
        </div>
      `;
      document.getElementById('btn-reset-filters')?.addEventListener('click', () => {
        currentCategory = 'all';
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        filterButtons.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
        render();
      });
      return;
    }

    grid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
  }

  // Filter button click handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;
      render();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
    });
  }

  // Initial render
  render();
}

/* ===================================================================
   4. STATIC CONTACT FORM WITH WHATSAPP BRIDGE
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('corporate-quote-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#form-name')?.value.trim();
    const company = form.querySelector('#form-company')?.value.trim() || 'Individual Buyer';
    const email = form.querySelector('#form-email')?.value.trim();
    const category = form.querySelector('#form-category')?.value || 'General Inquiry';
    const message = form.querySelector('#form-message')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in your name, email, and enquiry message.');
      return;
    }

    // Construct structured WhatsApp message
    const waText = 
      `*CORPORATE SUPPLY ENQUIRY — PINE PILLARS VENTURES*\n\n` +
      `• Contact Person: ${name}\n` +
      `• Company / Organization: ${company}\n` +
      `• Email Address: ${email}\n` +
      `• Supply Division: ${category}\n` +
      `• Requirements / Message:\n${message}\n\n` +
      `Please provide product availability, specifications, and an official quotation.`;

    const encoded = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    showToast('Preparing your enquiry on WhatsApp...');

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      form.reset();
    }, 400);
  });
}

/* ===================================================================
   5. DYNAMIC COPYRIGHT YEAR
   =================================================================== */
function initDynamicYear() {
  const yearEls = document.querySelectorAll('#current-year, .current-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = currentYear;
  });
}

/* ===================================================================
   6. ACCESSIBLE TOAST NOTIFICATION UTILITY
   =================================================================== */
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
