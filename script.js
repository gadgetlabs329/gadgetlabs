let products = [];

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
    result.innerHTML = `
      <div class="product">
        <h2>Please enter a product code.</h2>
      </div>
    `;
    return;
  }

  const found = products.find(
    product => product.code.toUpperCase() === keyword
  );

  if (!found) {
    result.innerHTML = `
      <div class="product">
        <h2>❌ Product Not Found</h2>
        <p>Please check the product code and try again.</p>
      </div>
    `;
    return;
  }

  // Convert description line breaks
  const description = found.description.replace(/\n/g, "<br>");

  // Build feature list
  let featureHTML = "";

  if (found.features && found.features.length > 0) {
    featureHTML = `
      <div class="feature-section">
        <h3>Key Features</h3>
        <ul class="feature-list">
          ${found.features.map(feature => `<li>✔️ ${feature}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  result.innerHTML = `
    <div class="product">

      <img
        class="product-image"
        src="${found.image}"
        alt="${found.name}"
      >

      <h2 class="product-title">
        ${found.name}
      </h2>

      <div class="product-description">
        ${description}
      </div>

      ${featureHTML}

      <a
        class="buy-btn"
        href="${found.link}"
        target="_blank"
        rel="noopener noreferrer"
      >
        🛒 BUY NOW
      </a>

      <div class="affiliate-disclosure">

        <h4>Affiliate Disclosure</h4>

        <p>
          Some links on this website may be affiliate links. If you make a purchase through these links, we may earn a commission at no extra cost to you.
        </p>

        <p class="copyright">
          © 2026 Tanvixa. All rights reserved.
        </p>

      </div>

    </div>
  `;
}
