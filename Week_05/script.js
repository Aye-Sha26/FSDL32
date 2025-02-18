let cart = [];

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');
    const cartItems = document.getElementById('cart-items');
    
    // Clear cart items in popup
    cartItems.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        total += parseFloat(item.price);
        
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(listItem);
    });
    
    cartCount.textContent = cart.length;
    totalPrice.textContent = total.toFixed(2);
}

function addToCart(event) {
    const menuItem = event.target.closest('.menu-item');
    const itemName = menuItem.getAttribute('data-name');
    const itemPrice = menuItem.getAttribute('data-price');
    
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = (cartPopup.style.display === 'block') ? 'none' : 'block';
}

function clearCart() {
    cart = [];
    updateCart();
    toggleCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your order! Your food will be delivered soon.');
        clearCart();
    }
}

const addButtons = document.querySelectorAll('.add-to-cart');
addButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});
