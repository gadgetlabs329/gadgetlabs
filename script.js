const products = [
{
code:"GL001",
name:"Wireless Earbuds",
image:"https://via.placeholder.com/300x300.png?text=GL001",
link:"https://example.com"
},
{
code:"GL002",
name:"Smart Watch",
image:"https://via.placeholder.com/300x300.png?text=GL002",
link:"https://example.com"
},
{
code:"GL003",
name:"Mini Projector",
image:"https://via.placeholder.com/300x300.png?text=GL003",
link:"https://example.com"
}
];

function searchProduct(){

let keyword=document
.getElementById("searchInput")
.value
.trim()
.toUpperCase();

let result=document.getElementById("result");

result.innerHTML="";

if(keyword===""){
result.innerHTML="<h2>Please enter a product code.</h2>";
return;
}

let found=products.find(p=>p.code===keyword);

if(!found){

result.innerHTML="<h2>Product Not Found</h2>";

return;

}

result.innerHTML=`
<div class="product">

<img src="${found.image}">

<h2>${found.name}</h2>

<h3>${found.code}</h3>

<a class="buy-btn" href="${found.link}" target="_blank">

Buy Now

</a>

</div>
`;

}
