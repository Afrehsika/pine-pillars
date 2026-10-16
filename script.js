/**
 * PINE PILLARS VENTURES — ROOT SCRIPT LOADER
 * Seamlessly loads js/products.js and js/main.js
 */

// If PRODUCTS is not defined, load products.js dynamically
if (typeof PRODUCTS === 'undefined') {
  const prodScript = document.createElement('script');
  prodScript.src = 'js/products.js';
  document.head.appendChild(prodScript);
}

// Load main.js
const mainScript = document.createElement('script');
mainScript.src = 'js/main.js';
document.head.appendChild(mainScript);
