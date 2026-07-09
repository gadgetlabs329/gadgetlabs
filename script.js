let products = [];

fetch("products.json")
  .then(response => response.json())
  .then(data => {
    products = data;
  })
  .catch(error => {
    console.error("Error:", error);
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

      <h2 class="product-title">${found.name}</h2>

      <img src="${found.image}" alt="${found.name}">

      <p class="product-description">
        ${found.description}
      </p>

      <a class="buy-btn"
         href="${found.link}"
         target="_blank">

         🛒 BUY NOW

      </a>

    </div>
  `;
}
