/* =====================================
   TANVIXA PRODUCT SEARCH SYSTEM
   FINAL UPGRADED VERSION
===================================== */


let products = [];
let productsLoaded = false;



// =====================================
// LOAD PRODUCTS JSON
// =====================================


fetch("products.json")

.then(response => {


    if(!response.ok){

        throw new Error("products.json not found");

    }


    return response.json();


})


.then(data => {


    products = data;

    productsLoaded = true;


    console.log("Products Loaded:", products.length);


})


.catch(error => {


    console.error("Product Loading Error:", error);


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







    // Check JSON Loading


    if(!productsLoaded){


        result.innerHTML = `


        <div class="loading-card">


            <div class="loader"></div>


            <h3>
            Loading Products...
            </h3>


            <p>
            Please wait a moment
            </p>


        </div>


        `;


        return;


    }







    // Empty Input Check


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









    // Search Loading Animation


    result.innerHTML = `


    <div class="loading-card">


        <div class="loader"></div>


        <h3>
        Searching Product...
        </h3>


        <p>
        Finding your gadget
        </p>


    </div>


    `;









    setTimeout(()=>{





        let product = products.find(item => 

            item.code

            .toString()

            .trim()

            .toUpperCase() === code

        );









        // Product Not Found


        if(!product){



            result.innerHTML = `


            <div class="error-card">


                <h3>
                🔍 Product Not Found
                </h3>


                <p>
                We couldn't find this product.
                </p>


                <small>
                Try code example: GL001
                </small>


            </div>


            `;


            return;


        }









        // Create Feature List


        let featureHTML = "";



        if(product.features && product.features.length > 0){



            product.features.forEach(feature => {



                featureHTML += `


                <li>
                ✔️ ${feature}
                </li>


                `;



            });



        }









        // Display Product Card


        result.innerHTML = `



        <div class="product-card">







            <img

            src="${product.image}"

            alt="${product.name}"

            class="product-image"

            loading="lazy"

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

            rel="noopener noreferrer"

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
