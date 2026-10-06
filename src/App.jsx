import React from "react"
import "./App.css"
    import { NavLink } from "react-router-dom";
 import BannerCarousel from "./pages/components/BannerCarousel.jsx";
 // import ProductDetail from "./pages/components/ProductDetail.jsx";//
    function App(){
      const products=[

{
id:2,
name:"Surf Excel Washing Powder 2KG",
desc:"More Laundry & Household from Surf Excel",
price:614,
imageURL:
"https://img.drz.lazcdn.com/static/pk/p/c2fbafd3bf731d023bd16ea36ec506bd.png_720x720q80.png_.webp"
},
{
id:3,
name:"Jenpharm-Dermive Oil,Free Moistuizer-100ml",
desc:"More Skin Care from Jenpharm",
price:988,
imageURL:
"https://img.drz.lazcdn.com/static/pk/p/38a6232c6e18a510623c51d0fb64d05f.png_720x720q80.png_.webp" 
},
{
id:4,
name:"Merry Me #1 Women's Best Seller Scent Perfume",
desc:"More Fragrances from Scents Stories",
price:1538,
imageURL:
 "http://lzd-social-img.oss-ap-southeast-1.aliyuncs.com/dc7630ad1e9a4b74bae6f6a392c5320b_1_1771393710.164051.jpg"
},
{
id:5,
name:"M10 and M04 Stereo TWS Wireless Bluetooth",
desc:"More Audio from no brand",
price:689,
imageURL:
"https://img.drz.lazcdn.com/static/pk/p/44597d89eb506f9bf710fd6080f80874.jpg_720x720q80.jpg_.webp"
},
{
id:6,
name:"Double Side Silicon Suction Pad Phone Hold",
desc:"More Mobile Accessories from no brand",
price:99,
imageURL:
 "http://lzd-social-img.oss-ap-southeast-1.aliyuncs.com/6ce49b1170f14b32b4eb11b0ccd24e5a_1_1754854515.528466.jpg"
},
{
id:7,
name:"Fashion Black Synthetic Leather Summer Shoulder Bag For Women",
desc:"More Women from no brand",
price:546,
imageURL:
"https://img.drz.lazcdn.com/g/kf/S636ed115718c4136ab9fe461188022fbT.jpg_720x720q80.jpg_.webp"
},
{
id:8,
name:"Beautious Pack of 1 Air Cushion Liquid Blush Natural lasting",
desc:"More Makeup from no brand",
price:317,
imageURL:
"https://img.drz.lazcdn.com/static/pk/p/ef93062c279111120cec979b13b8c06d.png_720x720q80.png_.webp"
},
{
id:9,
name:"Beautious Jelly Blush Stick Sheer Lips &Cheek Stain",
desc:"More Makeup from no brand",
price:333,
imageURL:
"https://img.drz.lazcdn.com/g/kf/Sd5f6e82c874f425aa719bf0c351bdb0cY.png_720x720q80.png_.webp"
},
{
id:10,
name:"Fashionable 4pcs Men's Quartz Watch Set with Calendar Function Round Dial.",

desc:"More Watches from no brand",
price:3000,
imageURL:
"https://img.drz.lazcdn.com/static/pk/p/6ac6ea460513ae19a0e97ce70b92321c.jpg_720x720q80.jpg_.webp"
},

{
id:11,
name:"High Quality Bownot Collar For Cats -Pink",

desc:"More Cat from no brand",
price:176,
imageURL:
"https://img.drz.lazcdn.com/static/pk/p/12421318ab5833d4dee7a38cc29854cc.jpg_720x720q80.jpg_.webp"
},
{
id:12,
name:"Ensure Vanilla Milk Powder 400g",

desc:"More Beverages from Ensure",
price:2980,
imageURL:
"https://img.drz.lazcdn.com/static/pk/p/fca12e89554de1cf9ea2abf7d9a03ef3.jpg_720x720q80.jpg_.webp"
},
{
id:13,
name:" Raindrop bangles 4 kangan of Kashmiri churi 12 bangles or raindrop.",
desc:"More Jewellery from No Brand",
price:500,
imageURL:
"https://img.drz.lazcdn.com/g/kf/S0424aae20052419d8e688ef51b4961eeN.png_720x720q80.png_.webp"
},
{
id:14,
name:"Air-podTWS 12 black Mini Bluetooth Wireless Headset Bluetooth",

desc:"More Audio from no Brand",
price:790,
imageURL:
"https://img.drz.lazcdn.com/static/pk/p/4b936dd9a66a5c27f641ff0463c71cfd.jpg_720x720q80.jpg_.webp"
},
{
id:15,
name:"Dual Side Sketch Markers - 12 - 120 Colors Dual Tip Art Markers for Kids",

desc:"More Colors from no Brand",
price:1000,
imageURL:
"https://img.drz.lazcdn.com/g/kf/S65dc5fb1ecd944a5b958441ef9f8c1d0F.png_720x720q80.png_.webp"

},
{
id:16,
name:"Makeup Storage Rack, Cosmetic Storage Shelf, Makeup Organizer",
desc:"More Makeup From No Brand",
price:1500,
imageURL:
"https://img.drz.lazcdn.com/g/kf/S1945349fab7d4c12b987421b39926aecQ.jpg_720x720q80.jpg_.webp" 
},
{
id:17,
name:"Finger Puff Foundation Small Air Cushion Powder Sponge Face Concealer ",
desc:"More Makeup From No Brand",
price:555,
imageURL:
"https://img.drz.lazcdn.com/g/kf/S66909aa45c5c43cd9bea0aa6cfeb68d5x.jpg_720x720q80.jpg_.webp" 
},
{
id:18,
name:"Latest Design Black 2025 Watch Black Casual Watches + Bracelet + Cuban Chain Bracelet",
desc:"More Watches From No Brand",
price:3000,
imageURL:
"https://img.drz.lazcdn.com/static/pk/p/ddf4d0965c1c4c9f783b2fb19b98f4a3.jpg_720x720q80.jpg_.webp"
},
{
id:19,
name:"Yummy Gummy Kids Multivitamins",

desc:"More Medicine From Brand",
price:1944,
imageURL:
"https://img.drz.lazcdn.com/static/pk/p/1d03d48ef17df17aa06530583a075293.jpg_720x720q80.jpg_.webp"
},
{
id:20,
name:"most viral frock 3pc printed neck lace work trending for women",

desc:"More Clothes From Brand",
price:1844,
imageURL:
"https://img.drz.lazcdn.com/g/kf/S78a6e8c8a4654e0688376febf18454c4H.jpg_720x720q80.jpg_.webp"
},
{

id:21,
name:"Samsung Galaxy A07 4GB+64GB - PTA APPROVED",


desc:"High Resolution Monitor",
price:50000,
imageURL:
"https://img.drz.lazcdn.com/static/pk/p/7c9eaf0c192a7596114f609c123cd21a.jpg_720x720q80.jpg_.webp"
}
      ]
      return(
        
        <div>
        <div className="text-4xl text-orange-400  p-7 font-bold">Daraz</div>
        <BannerCarousel/>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
{products.map((product)=>{
  return(
<div
 key={product.id}
  className="bg-white p-4 rounded-lg shadow">
<h2 className="font-bold">{product.name}</h2>
<p>{product.desc}</p>
<p className="text-orange-500 font-bold">{product.price}</p>
<img 
src={product.imageURL}
alt={product.name}
 className="w-full h-40 object-contain"/>
<NavLink to={`/products/${product.id}`}className="text-blue-500">Detail</NavLink>
</div>
  );
}
)}
</div>
        </div>
      
      )
    }

export default App;