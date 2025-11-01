document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos del DOM ---
    const loginPage = document.getElementById('login-page');
    const productsPage = document.getElementById('products-page');
    const cartPage = document.getElementById('cart-page');
    const thankyouPage = document.getElementById('thankyou-page');
    const pqrPage = document.getElementById('pqr-page');

    const loginForm = document.getElementById('login-form');
    const viewCartBtn = document.getElementById('view-cart-btn');
    const backToProductsBtn = document.getElementById('back-to-products-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    const backToHomeBtn = document.getElementById('back-to-home-btn');
    const pqrBtn = document.getElementById('pqr-btn');
    const backFromPqrBtn = document.getElementById('back-from-pqr-btn');

    const productList = document.getElementById('product-list');
    const cartItemsList = document.getElementById('cart-items');
    const cartCountSpan = document.getElementById('cart-count');
    const cartTotalSpan = document.getElementById('cart-total');

    // --- Datos de ejemplo de videojuegos ---
    const videogames = [
        { id: 1, name: 'The Witcher 3', price: 59.99, image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Witcher' },
        { id: 2, name: 'Cyberpunk 2077', price: 49.99, image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Cyberpunk' },
        { id: 3, name: 'Red Dead Redemption 2', price: 69.99, image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=RDR2' },
        { id: 4, name: 'Elden Ring', price: 39.99, image: 'https://via.placeholder.com/150/FFFF00/000000?text=Elden+Ring' },
        { id: 5, name: 'God of War', price: 29.99, image: 'https://via.placeholder.com/150/FFA500/000000?text=God+of+War' },
    ];

    let cart = [];

    // --- Funciones de navegación entre páginas ---
    function showPage(page) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        page.classList.add('active');
    }

    // --- Funciones del carrito ---
    function renderProducts() {
        productList.innerHTML = '';
        videogames.forEach(game => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <h3>${game.name}</h3>
                <p>$${game.price.toFixed(2)}</p>
                <button data-id="${game.id}">Añadir al Carrito</button>
            `;
            productList.appendChild(productCard);
        });
    }

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            `;
            cartItemsList.appendChild(cartItem);
            total += item.price;
        });
        cartCountSpan.textContent = cart.length;
        cartTotalSpan.textContent = total.toFixed(2);
    }

    // --- Event Listeners (Manejo de eventos) ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica de validación real
        console.log('Usuario ha iniciado sesión');
        showPage(productsPage);
        renderProducts(); // Renderiza los productos después de iniciar sesión
    });

    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const gameId = parseInt(e.target.dataset.id);
            const gameToAdd = videogames.find(game => game.id === gameId);
            if (gameToAdd) {
                cart.push(gameToAdd);
                updateCart();
                console.log(`${gameToAdd.name} añadido al carrito.`);
            }
        }
    });

    viewCartBtn.addEventListener('click', () => {
        showPage(cartPage);
    });

    backToProductsBtn.addEventListener('click', () => {
        showPage(productsPage);
    });

    checkoutBtn.addEventListener('click', () => {
        // Lógica para procesar la compra (simulada)
        alert('Compra realizada con éxito!');
        cart = []; // Vaciar el carrito
        updateCart();
        showPage(thankyouPage);
    });

    backToHomeBtn.addEventListener('click', () => {
        showPage(loginPage);
    });

    pqrBtn.addEventListener('click', () => {
        showPage(pqrPage);
    });

    backFromPqrBtn.addEventListener('click', () => {
        showPage(loginPage);
    });

    // Iniciar la aplicación en la página de login
    showPage(loginPage);
});

