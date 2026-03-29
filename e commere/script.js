const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Smart Watch", price: 3000 }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartDiv = document.getElementById("cart");
const status = document.getElementById("status");

// Display Products
function showProducts() {
  productList.innerHTML = "";
  products.forEach(p => {
    productList.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  showCart();
}

// Show Cart
function showCart() {
  cartDiv.innerHTML = "";
  cart.forEach((item, index) => {
    cartDiv.innerHTML += `
      <div class="cart-item">
        ${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  if (cart.length > 0) {
    cartDiv.innerHTML += `<button onclick="placeOrder()">Place Order</button>`;
  }
}

// Remove Item
function removeItem(index) {
  cart.splice(index, 1);
  showCart();
}

// Place Order
function placeOrder() {
  cart = [];
  showCart();
  status.innerText = "✅ Order Placed! Status: Processing...";
  
  setTimeout(() => {
    status.innerText = "🚚 Order Shipped!";
  }, 3000);

  setTimeout(() => {
    status.innerText = "📦 Delivered!";
  }, 6000);
}

// Init
showProducts();