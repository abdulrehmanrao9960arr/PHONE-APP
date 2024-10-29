const phones = [
    {
      brand: "Samsung",
      model: "Galaxy S21",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 799,
    },
    {
      brand: "Apple",
      model: "iPhone 13",
      ram: 4,
      rom: 128,
      camera: "12 megapixel",
      price: 799,
    },
    {
      brand: "OnePlus",
      model: "9",
      ram: 12,
      rom: 256,
      camera: "48 megapixel",
      price: 729,
    },
    {
      brand: "Google",
      model: "Pixel 6",
      ram: 8,
      rom: 128,
      camera: "50 megapixel",
      price: 599,
    },
    {
      brand: "Xiaomi",
      model: "Mi 11",
      ram: 8,
      rom: 256,
      camera: "108 megapixel",
      price: 749,
    },
    {
      brand: "Sony",
      model: "Xperia 1 III",
      ram: 12,
      rom: 256,
      camera: "12 megapixel",
      price: 1299,
    },
    {
      brand: "Oppo",
      model: "Find X3 Pro",
      ram: 12,
      rom: 256,
      camera: "50 megapixel",
      price: 1149,
    },
    {
      brand: "Vivo",
      model: "X60 Pro",
      ram: 12,
      rom: 256,
      camera: "48 megapixel",
      price: 999,
    },
    {
      brand: "Nokia",
      model: "G50",
      ram: 4,
      rom: 128,
      camera: "48 megapixel",
      price: 299,
    },
    {
      brand: "Motorola",
      model: "Edge 20",
      ram: 8,
      rom: 256,
      camera: "108 megapixel",
      price: 599,
    },
    {
      brand: "Realme",
      model: "GT",
      ram: 12,
      rom: 256,
      camera: "64 megapixel",
      price: 499,
    },
    {
      brand: "Asus",
      model: "ROG Phone 5",
      ram: 16,
      rom: 512,
      camera: "64 megapixel",
      price: 999,
    },
    {
      brand: "HTC",
      model: "Desire 21 Pro",
      ram: 8,
      rom: 128,
      camera: "48 megapixel",
      price: 399,
    },
    {
      brand: "Huawei",
      model: "P40 Pro",
      ram: 8,
      rom: 256,
      camera: "50 megapixel",
      price: 899,
    },
    {
      brand: "LG",
      model: "Wing",
      ram: 8,
      rom: 256,
      camera: "64 megapixel",
      price: 999,
    },
    {
      brand: "ZTE",
      model: "Axon 20",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 399,
    },
    {
      brand: "BlackBerry",
      model: "KEY2",
      ram: 6,
      rom: 64,
      camera: "12 megapixel",
      price: 649,
    },
    {
      brand: "Lenovo",
      model: "Legion Phone Duel",
      ram: 16,
      rom: 512,
      camera: "64 megapixel",
      price: 999,
    },
    {
      brand: "Alcatel",
      model: "3L",
      ram: 4,
      rom: 64,
      camera: "48 megapixel",
      price: 199,
    },
    {
      brand: "TCL",
      model: "10 Pro",
      ram: 6,
      rom: 128,
      camera: "64 megapixel",
      price: 449,
    },
  ];
let cartItems = [];
const checkDataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
if (checkDataFromLocalStorage === null) {
  cartItems = [];
} else {
  cartItems = [...checkDataFromLocalStorage];
}

  
let divs = document.querySelector(".container");

  phones.map((item , index) => {
      divs.innerHTML += `
      <div class="container mb-5  bg-white text-black rounded-5 pb-5 pt-5  d-flex justify-content-center gap-5 flex-wrap my-5" >
    <ul class="list">
        <li><h1>NAME : ${item.model}</h1></li>
        <li><h1>Brand: ${item.brand}</h1></li>
        <li><h1>Price: ${item.price}$</h1></li>
</div>
<div class="btn btn-primary btn-lg justify-content-center"><button onclick="addToCart(${index})">ADD TO CART</button>
    
    </div>
      `})

function addToCart(index) {
  const checkIndex = cartItems.indexOf(phones[index])
  if (checkIndex === -1) {
 phones[index].quantity =1
    cartItems.push(phones[index])
  } else {
    cartItems[checkIndex].quantity += 1 ;
  }
  console.log(cartItems);
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your Item is been Saved in Cart Items",
    showConfirmButton: false,
    timer: 1500
  });
  
}

function CheckOutItems(){
  const arrintostring = JSON.stringify(cartItems)
  const news = localStorage.setItem("cart" , arrintostring);
window.location="Cart.html"

}

