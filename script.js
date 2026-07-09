let products = [];

// Load products from products.json
fetch("products.json")
  .then(response => response.json())
  .then(data => {
    products = data;
  })
  .catch(error => {
    console.error("Error loading products:", error);
  });

function searchProduct() {

  const keyword = document
    .getElementById("searchInput")
    .value
    .trim()
    .toUpperCase();

  const result = document.getElementById("result");

  result.innerHTML = "";

  if (keyword === "") {
    result.innerHTML = "<h2>Please enter a product code.</h2>";
    return;
  }

  const found = products.find(
    p => p.code.toUpperCase() === keyword
  );

  if (!found) {
    result.innerHTML = "<h2>❌ Product Not Found</h2>";
    return;
  }

  result.innerHTML = `
    <div class="product">
      <img src="${found.image}" alt="${found.name}">
      <h2>${found.name}</h2>
      <p><strong>Code:</strong> ${found.code}</p>
      <p><strong>Category:</strong> ${found.category}</p>
      <p><strong>Price:</strong> ${found.price}</p>
      <a class="buy-btn" href="${found.link}" target="_blank">
        🛒 Buy Now
      </a>
    </div>
  `;
}
