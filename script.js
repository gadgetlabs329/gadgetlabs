/* =====================================
   TANVIXA PRODUCT SEARCH SYSTEM
   UPGRADED FINAL VERSION
===================================== */


let products = [];

let productsLoaded = false;





// =====================================
// LOAD PRODUCTS JSON
// =====================================


fetch("products.json")


.then(response => {


    if(!response.ok){

        throw new Error(
            "Unable to load products.json"
        );

    }


    return response.json();


})


.then(data => {


    products = data;


    productsLoaded = true;


    console.log(
        "Tanvixa Products Loaded:",
        products.length
    );


})


.catch(error => {


    console.error(
        "Products Loading Error:",
        error
    );


    productsLoaded = false;


});









// =====================================
// SEARCH PRODUCT FUNCTION
// =====================================


function searchProduct(){



    const input = document.getElementById(
        "productCode"
    );



    const result = document.getElementById(
        "result"
    );



    let code = input.value
    .trim()
    .toUpperCase();








    // PRODUCTS LOADING CHECK


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








    // EMPTY INPUT CHECK


    if(code === ""){


        result.innerHTML = `


        <div class="error-card">


            <h3>
            ⚠️ Enter Product Code
            </h3>


            <p>
            Please enter a code like GL001
            </p>


        </div>


        `;


        return;


    }








    // SEARCH ANIMATION


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



        const product = products.find(item =>


            item.code &&

            item.code
            .toString()
            .trim()
            .toUpperCase() === code


        );








        // PRODUCT NOT FOUND


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
                Example: GL001
                </small>


            </div>


            `;


            return;


        }








        // CREATE FEATURE LIST


        let featureHTML = "";



        if(
            product.features &&
            product.features.length > 0
        ){


            product.features.forEach(feature => {


                featureHTML += `


                <li>
                ✔️ ${feature}
                </li>


                `;


            });


        }








        // =====================================
        // DISPLAY PRODUCT CARD
        // =====================================



        result.innerHTML = `



        <div class="product-card">







            <img

            src="${product.image}"

            alt="${product.name}"

            class="product-image"

            loading="lazy"

            decoding="async"

            onerror="this.src='images/tanvixalogo.jpg'"

            >







            <h2>

            ${product.name}

            </h2>







            <p class="product-description">

            ${product.description
            .replace(/\n/g,"<br><br>")}

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
            If you make a purchase through these links,
            we may earn a commission at no extra cost to you.

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

.addEventListener(
"keypress",
function(event){



    if(event.key === "Enter"){


        searchProduct();


    }



});
