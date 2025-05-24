// 1. Declare cart globally
let cart;

document.addEventListener('DOMContentLoaded', function () {
    // 1. OBTENER REFERENCIAS A LOS ELEMENTOS DEL DOM
    const navbarToggler = document.querySelector('.navbar-toggler');
    const mainNavLinks = document.querySelectorAll('.navbar-nav > .nav-item > .nav-link:not(.dropdown-toggle)'); // Inicio y Promociones
    const dropdownItems = document.querySelectorAll('.dropdown-menu > li > .dropdown-item'); // Mugs, Llaveros, Personaliza
    const categoriasDropdown = document.querySelector('.nav-item.dropdown'); // El LI que contiene "Categorias"
    const navbarCollapse = document.querySelector('.navbar-collapse'); // El menú colapsable
    const productImages = document.querySelectorAll('.product-card .card-img-top'); // Imágenes de productos
    const carouselSection = document.getElementById('home'); // La sección del carrusel (si existe)
    const productSections = document.querySelectorAll('.product-section'); // Todas las secciones de productos
    const emptyBtn = document.getElementById('floating-empty-cart');
    if (emptyBtn) {
        emptyBtn.addEventListener('touchend', (e) => { // Usa touchend
            e.preventDefault(); // Evita que el evento click también se dispare
            cart.length = 0;
            saveCart();
            updateCartUI();
        });
    }
    const productos = Array.from(document.querySelectorAll(".product-item")).map(item => {
        return {
            element: item,
            nombre: item.querySelector(".card-title").textContent.trim()
        };
    });

    function buscarProducto(nombreBuscado) {
        const input = nombreBuscado.toLowerCase();
        let encontrado = null;

        // Ocultar secciones
        document.querySelectorAll(".product-section").forEach(seccion => {
            seccion.style.display = "none";
        });

        const home = document.getElementById("home");
        if (home) home.style.display = "none";

        productos.forEach(p => {
            if (p.nombre.toLowerCase().includes(input)) {
                p.element.style.display = "block";
                p.element.closest(".product-section").style.display = "block";
                encontrado = p.element;

                // Resaltar producto
                p.element.classList.add("destello");
                setTimeout(() => {
                    p.element.classList.remove("destello");
                }, 1500);

                // Scroll
                p.element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });

        if (!encontrado) {
            alert("Producto no encontrado");
        }
        // Cerrar el menú hamburguesa si está abierto
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    }

    // 2. CERRAR EL MENÚ AL HACER CLIC EN INICIO O PROMOCIONES
    if (mainNavLinks) { // Verifica si mainNavLinks existe
        mainNavLinks.forEach(navLink => {
            navLink.addEventListener('click', () => {
                if (navbarCollapse && navbarCollapse.classList.contains('show')) { // Solo cierra si está abierto
                    navbarToggler.click();
                }
            });
        });
    }

    // 3. CERRAR EL MENÚ AL HACER CLIC EN ELEMENTOS DEL DROPDOWN (MUGS, LLAVEROS, ETC.)
    if (dropdownItems) { // Verifica si dropdownItems existe
        dropdownItems.forEach(dropdownItem => {
            dropdownItem.addEventListener('click', () => {
                if (navbarCollapse && navbarCollapse.classList.contains('show')) { // Solo cierra si está abierto
                    navbarToggler.click();
                }
            });
        });
    }

    // 4. CERRAR EL MENÚ AL HACER CLIC FUERA DE ÉL (OPCIONAL PERO RECOMENDADO)
    document.addEventListener('click', (event) => {
        if (navbarCollapse && !navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target) && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });

    // 5. Manejar el zoom de las imágenes
    if (productImages) { // Verifica si productImages existe
        productImages.forEach(img => {
            img.addEventListener('click', () => {
                img.classList.toggle('zoomed-in');
            });
        });
    }

    // 6. Mostrar el carrusel al cargar la página
    if (carouselSection) {
        carouselSection.style.display = 'block';
    }

    // 7. Manejar la navegación entre secciones (INICIO, MUGS, etc.)
    if (mainNavLinks) { // Verifica si mainNavLinks existe
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .dropdown-menu .dropdown-item'); // Selecciona TODOS los enlaces
        navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                const href = this.getAttribute('href');

                // Verifica si el href comienza con '#' (es una ancla interna)
                if (href && href.startsWith('#')) {
                    event.preventDefault(); // Previene la navegación solo para anclas

                    const targetId = href.substring(1);

                    // Ocultar secciones
                    if (carouselSection) {
                        carouselSection.style.display = 'none';
                    }
                    productSections.forEach(section => {
                        section.style.display = 'none';
                    });

                    if (targetId === 'home') {
                        if (carouselSection) {
                            carouselSection.style.display = 'block';
                        }
                    } else {
                        const targetSection = document.getElementById(targetId);
                        if (targetSection) {
                            targetSection.style.display = 'block';
                            // Opcional: scroll hacia la sección
                            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }

                    // Opcional: Cerrar el menú hamburguesa después de navegar a una sección
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                }
            });
        });
    }

    // Remove this redundant pay-button listener
    // document.getElementById('pay-button').addEventListener('click', () => {
    //     if (cart.length === 0) {
    //         alert("No hay productos en el carrito.");
    //         return;
    //     }
    //     document.getElementById('form-modal').style.display = 'flex';
    // });

    // Remove this redundant closeForm function
    // function closeForm() {
    //     document.getElementById('form-modal').style.display = 'none';
    // }

    // The rest of your first DOMContentLoaded block ends here.
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart (now declared globally)
    cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartContainer = document.getElementById('floating-cart-products');
    const cartCount = document.getElementById('floating-cart-item-count');
    const cartTotal = document.getElementById('floating-cart-total');

    const formModal = document.getElementById('form-modal');
    const orderForm = document.getElementById('order-form');
    const payButton = document.getElementById('pay-button');

    function showForm() {
        if (cart.length === 0) {
            alert("No hay productos en el carrito.");
            return;
        }
        if (formModal) {
            formModal.style.display = 'flex';
        }
    }

    function closeForm() {
        if (formModal) {
            formModal.style.display = 'none';
            orderForm.reset();
        }
    }

    if (payButton) {
        payButton.addEventListener('click', showForm);
    }

    if (orderForm) {
        orderForm.addEventListener('submit', e => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const address = document.getElementById('address').value.trim();
            const city = document.getElementById('city').value;
            const type = document.getElementById('type').value;

            let message = "🛍️ *Nuevo Pedido desde la tienda virtual*\n\n";
            message += `👤 *Nombre:* ${name}\n`;
            message += `🏠 *Dirección:* ${address}\n`;
            message += `🏙️ *Ciudad:* ${city}\n`;
            message += `📦 *Tipo de Pedido:* ${type}\n\n`;
            message += `🛒 *Productos solicitados:*\n`;

            if (cart.length > 0) {
                cart.forEach((item, index) => {
                    message += `*${index + 1}.* ${item.title} - $${item.price.toLocaleString()} x${item.quantity}\n`;
                });
            } else {
                message += "No hay productos en el carrito.\n";
            }

            const cartTotalElement = document.getElementById('floating-cart-total');
            if (cartTotalElement) {
                const total = cartTotalElement.innerText;
                message += `\n💰 *Total del Carrito:* ${total}\n`;
            }

            const phoneNumber = "573502617945";
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, '_blank');

            cart.length = 0;
            saveCart();
            updateCartUI();
            closeForm();
        });
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartUI() {
        cartContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.image}" width="40"/></td>
                <td>${item.title}</td>
                <td>$${item.price.toLocaleString()}</td>
                <td>
                    <div style="display:flex; align-items:center; gap:5px;">
                        <input type="number" min="1" class="qty-input" data-index="${index}" value="${item.quantity}" style="width:40px; text-align:center;" />
                    </div>
                </td>
                <td><button onclick="removeItem(${index})">X</button></td>
            `;
            cartContainer.appendChild(row);
        });

        cartCount.textContent = cart.length;
        cartTotal.textContent = `$${total.toLocaleString()}`;

        // Eventos botones + y −
        document.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.getAttribute('data-index'));
                const action = btn.getAttribute('data-action');

                if (action === 'increase') {
                    cart[index].quantity++;
                } else if (action === 'decrease' && cart[index].quantity > 1) {
                    cart[index].quantity--;
                }

                saveCart();
                updateCartUI();
            });
        });

        // Evento input manual
        document.querySelectorAll('.qty-input').forEach(input => {
            input.addEventListener('change', () => {
                const index = parseInt(input.getAttribute('data-index'));
                let value = parseInt(input.value);
                if (isNaN(value) || value < 1) value = 1;
                cart[index].quantity = value;
                saveCart();
                updateCartUI();
            });
        });
    }

    window.removeItem = function (index) {
        cart.splice(index, 1);
        saveCart();
        updateCartUI();
    }

    // AÑADIR PRODUCTO
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            const card = btn.closest('.product-card');
            const title = card.querySelector('.card-title').textContent;
            const price = parseInt(card.querySelector('.price').textContent.replace(/\D/g, ''));
            const image = card.querySelector('img').src;

            const existing = cart.find(p => p.title === title);
            if (existing) {
                existing.quantity++;
            } else {
                cart.push({ title, price, image, quantity: 1 });
            }

            saveCart();
            updateCartUI();
        });
    });

    // VACIAR CARRITO
    const emptyBtn = document.getElementById('floating-empty-cart');
    if (emptyBtn) {
        emptyBtn.addEventListener('click', () => {
            cart.length = 0;
            saveCart();
            updateCartUI();
        });
    }

    document.addEventListener('click', function (event) {
        const cartElement = document.getElementById('floating-cart');
        const toggleButton = document.getElementById('floating-cart-toggle');

        // Si no está visible, no hacemos nada
        if (!cartElement || cartElement.style.display === '') return;

        // Si el clic es fuera del carrito y fuera del botón que lo abre, cerramos
        if (!cartElement.contains(event.target) && (!toggleButton || !toggleButton.contains(event.target))) {
            cartElement.style.display = '';
        }
    }, true); // <-- IMPORTANTE: el tercer parámetro 'true' capta el evento en fase de captura

    // PREVENIR que los clics dentro del carrito cierren el mismo
    const cartElement = document.getElementById('floating-cart');
    if (cartElement) {
        cartElement.addEventListener('click', function (e) {
            e.stopPropagation(); // Evita que los clics dentro del carrito lleguen al document
        });
    }

    document.getElementById('floating-cart-toggle').addEventListener('click', function (e) {
        const cartElement = document.getElementById('floating-cart');
        cartElement.style.display = 'block';
        e.stopPropagation(); // Evita que se cierre justo al abrir
    });



    updateCartUI(); // inicializa vista del carrito al cargar
});