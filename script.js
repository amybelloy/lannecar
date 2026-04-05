document.addEventListener('DOMContentLoaded', () => {
    /* --- Premium Header Logic --- */
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- Mobile Menu Logic --- */
    const mobileMenu = document.getElementById('mobile-menu');
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');

    if (openMenuBtn && closeMenuBtn && mobileMenu) {
        openMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = 'auto';
        });

        // Close on overlay click
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = 'auto';
            });
        });
    }

    /* --- Horizontal Scroll Logic --- */
    const scrollContainer = document.getElementById('featured-scroll');
    const nextBtn = document.getElementById('scroll-next');
    const prevBtn = document.getElementById('scroll-prev');

    if (scrollContainer && nextBtn && prevBtn) {
        renderFeaturedProducts();

        nextBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
        });

        // Drag to scroll
        let isDown = false;
        let startX;
        let scrollLeft;

        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.style.cursor = 'grabbing';
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });
        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
        });
        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
        });
        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    }

    function renderFeaturedProducts() {
        if (!window.lanneProducts) return;
        const featured = window.lanneProducts.filter(p => p.featured);
        scrollContainer.innerHTML = featured.map(p => `
            <div class="product-slide">
                <div class="slide-img">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                </div>
                <div class="slide-content">
                    <div class="slide-rating">★★★★★</div>
                    <h3>${p.name}</h3>
                    <p class="slide-description">${p.short_desc || ''}</p>
                    <span class="slide-price">R$ ${p.price}</span>
                    <div class="slide-actions">
                        <a href="produto.html?id=${p.id}" class="btn btn-outline">Ver Detalhes</a>
                        <a href="${p.payment_link || '#'}" class="btn btn-primary">Pagar Agora</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    /* --- Mapping Logic (Leaflet) --- */
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        // Coordenadas aproximadas para Contagem/Ibirité - MG
        const map = L.map('map', {
            scrollWheelZoom: false
        }).setView([-19.932, -44.025], 11);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
        }).addTo(map);

        const stores = [
            { name: "Contagem", coords: [-19.9389, -44.0326], address: "Rua Marajó, 887" },
            { name: "Ibirité", coords: [-20.0215, -44.0583], address: "Av. Silva Guimarães, 257" }
        ];

        const customIcon = L.divIcon({
          className: 'custom-div-icon',
          html: "<div style='background-color:#004DFF; width:15px; height:15px; border-radius:50%; border:3px solid white; box-shadow:0 0 10px rgba(0,77,255,0.5);'></div>",
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });

        stores.forEach(store => {
            L.marker(store.coords, {icon: customIcon})
                .addTo(map)
                .bindPopup(`<b>Lanne Car ${store.name}</b><br>${store.address}`);
        });
    }

    /* --- WhatsApp Links --- */
    const wppLinks = document.querySelectorAll('.js-wpp-link');
    const phoneNumber = "553195519073"; 
    const wppMessage = "Oi Aline. Eu tenho interesse nos produtos da Lanne";
    wppLinks.forEach(link => {
        link.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(wppMessage)}`;
    });

    /* --- Page specific - Category Filtering (produtos.html) --- */
    const productsGrid = document.getElementById('all-products-grid');
    if (productsGrid) {
        renderAllProducts();
        setupCategoryFilters();
        setupSearch();
    }

    function renderAllProducts(filterCat = 'Todos', searchTerm = '') {
        if (!window.lanneProducts) return;
        let filtered = window.lanneProducts;

        if (filterCat !== 'Todos') {
            filtered = filtered.filter(p => p.category === filterCat);
        }

        if (searchTerm) {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        productsGrid.innerHTML = filtered.map(p => `
            <div class="product-slide" style="width: 100%; animation: fadeIn 0.5s ease forwards;">
                <span class="slide-category">${p.category}</span>
                <div class="slide-img">
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="slide-content">
                    <h3 style="font-size: 1.1rem;">${p.name}</h3>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                        <span class="slide-price" style="font-size: 1.4rem;">R$ ${p.price}</span>
                        <a href="produto.html?id=${p.id}" class="btn btn-primary" style="padding: 10px 20px; font-size: 0.7rem;">Comprar</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function setupCategoryFilters() {
        const filterContainer = document.getElementById('category-filters');
        if (!filterContainer) return;

        window.lanneCategories.forEach((cat, index) => {
            const btn = document.createElement('button');
            // By default, the first category (Todos) should be active
            btn.className = `btn filter-btn ${index === 0 ? 'btn-primary' : 'btn-outline'}`;
            btn.style = 'padding: 8px 16px; font-size: 0.7rem; white-space: nowrap; transition: 0.3s;';
            btn.textContent = cat;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('btn-primary');
                    b.classList.add('btn-outline');
                });
                btn.classList.add('btn-primary');
                btn.classList.remove('btn-outline');
                renderAllProducts(cat);
            });
            filterContainer.appendChild(btn);
        });
    }

    function setupSearch() {
        const searchInput = document.getElementById('product-search');
        if (!searchInput) return;
        searchInput.addEventListener('input', (e) => {
            renderAllProducts('Todos', e.target.value);
        });
    }

    /* --- Product Details Page (produto.html) --- */
    const productDetailContainer = document.getElementById('product-detail');
    if (productDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id')) || 1;
        const product = window.lanneProducts.find(p => p.id === productId);

        if (product) {
            document.title = `${product.name} | Lanne Car`;
            productDetailContainer.innerHTML = `
                <div style="display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 30px; align-items: start; max-width: 1100px; margin: 0 auto;">
                    <div class="product-gallery">
                        <div style="background: #fff; border-radius: var(--radius-md); overflow: hidden; aspect-ratio: 1; border: 1px solid rgba(0,0,0,0.08); padding: 15px; display: flex; align-items: center; justify-content: center; position: relative;">
                            <img src="${product.image}" alt="${product.name}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                            <img src="https://scontent.fsdu4-1.fna.fbcdn.net/v/t1.15752-9/660948894_961454283005131_7601419460369613948_n.png?stp=dst-png_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=mJZyaBDKS7AQ7kNvwHvlDQ8&_nc_oc=Adqmt0sM0Fbmg-bQr2sOGzH-_mkMLDlBms2aUweGAhyrxts8bx9t1x0LIhRByRxDQFmzbzq97hFnvZgyqr-ss69I&_nc_ad=z-m&_nc_cid=1295&_nc_zt=23&_nc_ht=scontent.fsdu4-1.fna&_nc_ss=7a32e&oh=03_Q7cD5AGkzr9L77WL-gCHNC8WJWsJtWjnVPq7baq5R8Hk63WqEA&oe=69F732B8" style="position: absolute; top: 10px; left: 10px; width: 30px; opacity: 0.8;">
                        </div>
                    </div>
                    <div class="product-info-details" style="padding-top: 5px;">
                        <span style="color: var(--color-primary); font-weight: 700; font-size: 0.75rem; font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 1px;">${product.category}</span>
                        <h1 style="font-size: 1.6rem; margin: 4px 0 8px; font-weight: 800; line-height: 1.1;">${product.name}</h1>
                        <p style="color: var(--color-light-gray); font-size: 0.85rem; margin-bottom: 15px; line-height: 1.4;">${product.short_desc}</p>
                        
                        <div style="margin-bottom: 20px;">
                            <span style="font-size: 0.7rem; color: var(--color-light-gray); text-transform: uppercase; letter-spacing: 0.5px;">Preço à vista</span>
                            <div style="font-size: 2rem; font-weight: 900; font-family: var(--font-heading); color: #1a1a1a;">R$ ${product.price}</div>
                        </div>
 
                        <div style="display: flex; gap: 10px; margin-bottom: 25px;">
                            <a href="${product.payment_link === '#' ? 'javascript:void(0)' : product.payment_link}" class="btn btn-primary" style="flex: 1.2; padding: 10px 15px; font-size: 0.75rem; font-weight: 700;">COMPRAR AGORA</a>
                            <a href="#" class="btn btn-outline js-wpp-link" style="flex: 1; padding: 10px 15px; font-size: 0.75rem; font-weight: 700;">COTAÇÃO</a>
                        </div>
 
                        <div style="border-top: 1px solid rgba(0,0,0,0.06); padding-top: 15px;">
                            <h3 style="margin-bottom: 10px; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; color: #444;">Descrição Técnica</h3>
                            <ul style="color: var(--color-light-gray); display: flex; flex-direction: column; gap: 5px; font-size: 0.75rem;">
                                <li style="display: flex; align-items: center; gap: 8px;"><div style="width:5px; height:5px; background:var(--color-primary); border-radius:50%;"></div> Alta capacidade de limpeza</li>
                                <li style="display: flex; align-items: center; gap: 8px;"><div style="width:5px; height:5px; background:var(--color-primary); border-radius:50%;"></div> Versatilidade</li>
                                <li style="display: flex; align-items: center; gap: 8px;"><div style="width:5px; height:5px; background:var(--color-primary); border-radius:50%;"></div> Praticidade</li>
                                <li style="display: flex; align-items: center; gap: 8px;"><div style="width:5px; height:5px; background:var(--color-primary); border-radius:50%;"></div> Economia</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            
            // Render Related
            const relatedContainer = document.getElementById('related-products');
            if (relatedContainer) {
                const related = window.lanneProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
                relatedContainer.innerHTML = related.map(p => `
                    <div class="product-slide" style="width: 280px; box-shadow:none; border:1px solid rgba(0,0,0,0.05);">
                        <div class="slide-img" style="aspect-ratio: 1; margin-bottom: 15px;">
                            <img src="${p.image}" alt="${p.name}">
                        </div>
                        <h4 style="font-size: 0.9rem; margin-bottom: 10px;">${p.name}</h4>
                        <span class="slide-price" style="font-size: 1.2rem;">R$ ${p.price}</span>
                        <a href="produto.html?id=${p.id}" class="btn btn-outline" style="width:100%; margin-top: 15px; font-size: 0.6rem; padding: 10px;">Ver mais</a>
                    </div>
                `).join('');
            }
        }
    }
    /* --- Reveal Animation Observer --- */
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger counters if this is the authority section
                if (entry.target.classList.contains('counter-section')) {
                    startCounters();
                }
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    /* --- Count-up Animation --- */
    function startCounters() {
        const counters = document.querySelectorAll('.count-number');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            const step = Math.ceil(target / (duration / 16));
            let current = 0;

            const updateCount = () => {
                current += step;
                if (current < target) {
                    counter.innerText = current;
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    /* --- Parallax Simple Effect --- */
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxBg = document.querySelector('.about-hero img');
        if (parallaxBg) {
            parallaxBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
});
