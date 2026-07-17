/* =====================================
   TANVIXA PRODUCT SEARCH SYSTEM
   UPGRADED VERSION
===================================== */


let products = [];



// Load Products JSON

fetch("products.json")

.then(response => response.json())

.then(data => {

    products = data;

})

.catch(error => {

    console.log("Product loading error:", error);

});








// =====================================
// SEARCH PRODUCT FUNCTION
// =====================================


function searchProduct(){


    let code = document
    .getElementById("productCode")
    .value
    .trim()
    .toUpperCase();



    let result = document.getElementById("result");





    // Empty Search Check

    if(code === ""){


        result.innerHTML = `

        <div class="error-card">


            <h3>
            ⚠️ Enter Product Code
            </h3>


            <p>
            Please enter a product code like GL001
            </p>


        </div>

        `;


        return;

    }







    // Loading Animation


    result.innerHTML = `


    <div class="loading-card">


        <div class="loader"></div>


        <h3>
        Searching Product...
        </h3>


        <p>
        Please wait
        </p>


    </div>


    `;






    setTimeout(() => {



        let product = products.find(item => item.code === code);







        // Product Not Found


        if(!product){


            result.innerHTML = `


            <div class="error-card">


                <h3>
                🔍 Product Not Found
                </h3>


                <p>
                Please check your product code and try again.
                </p>


                <small>
                Example: GL001
                </small>


            </div>


            `;


            return;

        }







        // Feature List Create


        let featureHTML = "";


        product.features.forEach(feature => {


            featureHTML += `

            <li>
            ✔️ ${feature}
            </li>

            `;


        });









        // Show Product


        result.innerHTML = `



        <div class="product-card">



            <img 
src="${product.image}" 
alt="${product.name}"
class="product-image"
onerror="this.src='images/logo.png'"
>





            <h2>
            ${product.name}
            </h2>





            <p class="product-description">

            ${product.description.replace(/\n/g,"<br><br>")}

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




    },800);



}








// =====================================
// ENTER KEY SEARCH
// =====================================


document
.getElementById("productCode")
.addEventListener("keypress", function(event){


    if(event.key === "Enter"){

        searchProduct();

    }


});
