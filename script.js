let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

document.addEventListener('DOMContentLoaded', () => {
  const cartBtn = document.getElementById('cart-btn');
  cartBtn.addEventListener('click', showCart);
});

function showCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = '<li>Your cart is empty.</li>';
  } else {
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = '${item.product} - $${item.price}';
      cartItems.appendChild(li);
    });
  }

  document.getElementById('cart-total').textContent = total;
  document.getElementById('cart-modal').style.display = 'flex';
}

function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}