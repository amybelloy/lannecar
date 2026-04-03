const WHATSAPP_NUM = "5531999999999"; 

// SVG Icons
const icons = {
  star: `<svg viewBox="0 0 24 24" class="icon-svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" class="icon-svg" style="fill: #25D366;"><path d="M12.031 2c-5.506 0-9.969 4.463-9.969 9.969 0 1.761.458 3.414 1.258 4.854L2 22l5.312-1.393c1.402.766 3.003 1.201 4.719 1.201 5.506 0 9.969-4.463 9.969-9.969s-4.463-9.969-9.969-9.969zm4.97 14.13c-.201.566-1.168 1.077-1.614 1.144-.413.061-.837.078-2.585-.634-1.921-.782-3.136-2.73-3.23-2.856-.094-.125-.768-.962-.768-1.834 0-.872.46-.1.602-.15.421 0 .61-.1.722-.164.21-.112.33-.18.423-.332.094-.15.112-.33-.038-.63-.125-.262-.435-.8-.742-1.503-.094-.21-.188-.413-.281-.61-.315-.658-.6-.684-.823-.695-.125-.008-.261-.01-.397-.01-.482 0-.825.132-1.075.397-.248.261-.94.922-.94 2.247 0 1.325.962 2.607 1.097 2.787.135.18 1.897 2.896 4.593 4.062s3.687 1.488 4.316 1.428c1.031-.1 2.164-.814 2.476-1.604.312-.79.312-1.468.219-1.604-.094-.135-.347-.215-.722-.403z"/></svg>`
};

// DOM Elements
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');

// Mobile Menu Toggle
if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// Header Scroll Effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(45, 75, 255, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Format Currency
function formatCurrency(value) {
  if (value === "Consulte") return value;
  return `R$ ${value}`;
}

// Generate WhatsApp Link
function getWhatsAppLink(productName = null) {
  let text = "Olá! Vim pelo site da Lanne Car e gostaria de atendimento.";
  if (productName) {
    text = `Olá! Tenho interesse no produto ${productName}. Gostaria de mais informações.`;
  }
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`;
}

// Setup Floating WhatsApp
function setupFloatingWhatsApp() {
  const wppBtn = document.createElement('a');
  wppBtn.href = getWhatsAppLink();
  wppBtn.className = 'floating-wpp';
  wppBtn.target = '_blank';
  wppBtn.innerHTML = icons.whatsapp;
  document.body.appendChild(wppBtn);
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  setupFloatingWhatsApp();
  
  const wppLinks = document.querySelectorAll('.js-wpp-link');
  wppLinks.forEach(link => {
    if (!link.href || link.getAttribute('href') === '#') {
       link.href = getWhatsAppLink();
    }
  });
});

// Render Product Card
function createProductCardHTML(product) {
  return `
    <div class="product-card">
      <div class="product-category">${product.category}</div>
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <div class="product-stars">
          ${icons.star}${icons.star}${icons.star}${icons.star}${icons.star}
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.short_desc}</p>
        <div class="product-price">${formatCurrency(product.price)}</div>
        <div class="product-actions">
          <a href="produto.html?id=${product.id}" class="btn btn-secondary">Ver detalhes</a>
          <a href="${product.payment_link}" target="_blank" class="btn btn-primary" onclick="alert('Você será redirecionado para o ambiente de pagamento.')">Pagar agora</a>
        </div>
      </div>
    </div>
  `;
}
