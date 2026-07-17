/* ===============================
   TANVIXA PRODUCT SEARCH SYSTEM
================================ */


let products = [];



// Load Product Data

fetch("products.json")

.then(response => response.json())

.then(data => {

    products = data;

})

.catch(error => {

    console.log("Product loading error:", error);

});







// ===============================
// SEARCH PRODUCT FUNCTION
// ===============================


function searchProduct(){


    let code = document
    .getElementById("productCode")
    .value
    .trim()
    .toUpperCase();



    let result = document.getElementById("result");




    if(code === ""){


        result.innerHTML = `

        <div class="welcome-card">

        <h3>
        ⚠️ Enter Product Code
        </h3>

        <p>
        Please enter a valid product code.
        </p>

        </div>

        `;

        return;

    }






    let product = products.find(item => item.code === code);






    if(!product){


        result.innerHTML = `


        <div class="welcome-card">


        <h3>
        ❌ Product Not Found
        </h3>


        <p>
        Please check your product code and try again.
        </p>


        </div>


        `;


        return;

    }








    // FEATURES HTML


    let featureHTML = "";



    product.features.forEach(feature => {


        featureHTML += `

        <li>
        ✔️ ${feature}
        </li>

        `;


    });









    // PRODUCT CARD DISPLAY


    result.innerHTML = `



    <div class="product-card">



        <img 
        src="${product.image}" 
        alt="${product.name}"
        class="product-image"
        >




        <h2>
        ${product.name}
        </h2>




        <p class="product-description">

        ${product.description.replace(/\n/g,"<br>")}

        </p>





        <ul class="product-features">

        ${featureHTML}

        </ul>






        <a 
        href="${product.link}" 
        target="_blank"
        class="buy-button"
        >

        🛒 BUY NOW

        </a>






        <div class="affiliate-box">


        <p>

        Some links on this website may be affiliate links. 
        If you make a purchase through these links, we may earn a commission 
        at no extra cost to you.

        </p>


        </div>





    </div>



    `;



}









// ENTER BUTTON SUPPORT


document
.getElementById("productCode")
.addEventListener("keypress", function(event){


    if(event.key === "Enter"){

        searchProduct();

    }


});
