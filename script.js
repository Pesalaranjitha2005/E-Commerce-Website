const products = [
  { id: 1, name: "Sneakers", price: 49.99, img: "https://via.placeholder.com/200x150" },
  { id: 2, name: "Headphones", price: 79.99, img: "https://via.placeholder.com/200x150" },
  { id: 3, name: "Backpack", price: 29.99, img: "https://via.placeholder.com/200x150" }
];

let cart = [];

function loadProducts() {
  const container = document.getElementById("products");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").textContent = cart.length;
  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    list.appendChild(li);
  });
  document.getElementById("total-price").textContent = total.toFixed(2);
}

function toggleCart() {
  const sidebar = document.getElementById("cart-sidebar");
  sidebar.classList.toggle("hidden");
}

function checkout() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
  toggleCart();
}

window.onload = loadProducts;
