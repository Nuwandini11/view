const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-items');
const totalContainer = document.getElementById('total-price');
const discountContainer = document.getElementById('discount-info');

let total = 0;

cart.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('cart-item');
    itemEl.textContent = `${item.name} - ₹${item.price}`;
    cartContainer.appendChild(itemEl);
    total += item.price;
});

// Apply discount if total > ₹500
let discount = 0;
if (total > 500) {
    discount = total * 0.1;
    discountContainer.textContent = `Discount: ₹${discount.toFixed(2)}`;
}

const finalTotal = total - discount;
totalContainer.textContent = `Total: ₹${finalTotal.toFixed(2)}`;

function placeOrder() {
    alert("Order placed!");
    localStorage.removeItem('cart');
    window.location.href = "thankyou.html"; // Optional page
}
