


let products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "download1.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "download.jpg",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "images3.jpg",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "images4.jpg",
    description: "Beautifull Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 1300,
    image: "images5.jpg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "images6.jpg",
    description: "Good looking Traditional Dress",
  },
  {
    id: 7,
    name: "western Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "images7.jpg",
    description: "Good looking Traditional Dress",
  },
  {
    id: 8,
    name: "british Dress",
    size: "M",
    color: "blue",
    price: 9500,
    image: "images9.jpg",
    description: "Good looking Traditional Dress",
  },
  {
    id: 9,
    name: " nine Dress",
    size: "M",
    color: "brown",
    price: 7500,
    image: "images9.jpg",
    description: "Good looking Traditional Dress",
  },
  {
    id: 10,
    name: "night Dress",
    size: "M",
    color: 
    'black',
    price: 6500,
    image: "images10.jpg",
    description: "Good looking Traditional Dress",
  },

  {
    id: 11,
    name: " europe Dress",
    size: "M",
    color: "jeans",
    price: 5500,
    image: "images11.jpg",
    description: "Good looking Traditional Dress",
  },
  {
    id: 12,
    name: "black Dress",
    size: "s",
    color: "gold",
    price: 2500,
    image: "images12.jpg",
    description: "Good looking Traditional Dress",
  },

];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="pictures/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="pictures/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}
let count=0;
function addToCart(id) {
  // getting the product
  
  let pro = getProductByID(products, id);

  //   putting in cart
  let yt=cart.find(function(a){
    return a.id==id;
  })
  if(yt==undefined){
  cart.push(pro);
  displayProducts(cart, "cart");
count=cart.length;
let yt=`<h2>Count is ${count}`
document.getElementById("count").innerHTML=yt;
  }
  else{
    
    alert("this is already in the cart");
   
    
  }
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });
  
  //   removing from cart based on index
  cart.splice(index, 1);
  count=cart.length;
  let yt=`<h2>Count is ${count}`
  document.getElementById("count").innerHTML=yt;
  displayProducts(cart, "cart");
}
function showmax(){
  console.log(products);
  console.log("srikar")
  if(document.getElementById('checkbox').checked){
    document.getElementById('check1box').checked=false;
    console.log("ty");

let yt=[];
products.forEach(function(a){
  yt.push(a);
})

console.log(yt);
let yi=yt.sort((a,b)=>(a.price<b.price)?1:-1)
 console.log(yi);

  displayProducts(yi);
}
else{
  console.log("sai");
  displayProducts(products);
  console.log(products);
}
}
function showmin(){
  // console.log(products);
  // console.log("srikar")

  if(document.getElementById('check1box').checked){
    console.log("ty");
    document.getElementById('checkbox').checked=false;

let yt=[];
products.forEach(function(a){
  yt.push(a);
})

console.log(yt);
let yi=yt.sort((a,b)=>(a.price>b.price)?1:-1)
 console.log(yi);

  displayProducts(yi);
  
}
else{
  console.log("sai");
  let pro = getProductByID(products, id);
  displayProducts(products);
  console.log(products);
}
}