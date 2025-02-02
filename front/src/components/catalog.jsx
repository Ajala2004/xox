import React from "react";

import "./catalog.css"; // Import updated CSS
const products = [
  {
    "id": 1,
    "name": "XOX Trucker Cap - Black",
    "description": "Stay sharp and represent the grind with the XOX “On the Move, City Hustle’ Trucker Cap. Designed for those who live life on the go, this cap blends effortless styles with an urban edge, making it the ultimate streetwear accessory.",
    "price": 5000,
    "size": ["One Size Fit All"],
    "category": "Caps",
    "color": "Black",
    "image": "/XOXTruckerCap-Black.png"
  },
  {
    "id": 2,
    "name": "XOX Singlet Tank Top",
    "description": "Stay cool, stylish, and unstoppable with the XOX Center Logo Singlet. Designed for ultimate comfort and street-ready vibes, this is perfect for layering or rocking solo.",
    "price": 5000,
    "size": ["One Size Fit All"],
    "category": "Tops",
    "color": "White",
    "image": "/XOXSingletTank Top.png"
  },
  {
    "id": 3,
    "name": "XOX Shirts - White",
    "description": "Make a statement with the XOX ‘Nothin is Real but the Dream’ Designed for those who see the world differently. Featuring the thought-provoking phrase ‘Nothing is real but the dream you choose to live’, this shirt is perfect for dreamers and doers alike.",
    "price": 18000,
    "size": ["L", "XL", "XXL", "XXXL"],
    "category": "Shirts",
    "color": "White",
    "image": "/XOXShirts-White.png"
  },
  {
    "id": 4,
    "name": "Culture is Eternal Shirt - Purple",
    "description": "Celebrate the essence of timeless style with the XOX ‘Culture is Eternal’ Shirt. Designed to honor individuality and heritage, this shirt makes bold statements about the power of culture and its everlasting influence.",
    "price": 18000,
    "size": ["L", "XL", "XXL", "XXXL"],
    "category": "Shirts",
    "color": "Purple",
    "image": "/purple.png"
  },
  {
    "id": 5,
    "name": "XOX No Limits Hoodie",
    "description": "Break boundaries and redefine your style with the XOX ‘No Limits’ Blue Hoodie. Designed for the bold and fearless, this hoodie features the empowering phrase 'No Limits' - a statement that anything is possible when you go all in.",
    "price": 25000,
    "size": ["XXXL"],
    "category": "Hoodies",
    "color": "Blue",
    "image": "/XOXNoLimitsHoodie.png"
  },
  {
    "id": 6,
    "name": "XOX Signature Hoodie",
    "description": "Designed to tell the world about XOX, letting it know it’s a beautiful culture that needs to be embraced.",
    "price": 25000,
    "size": ["XXXL"],
    "category": "Hoodies",
    "color": "Ash",
    "image": "/XOXSignatureHoodie.png"
  },
  {
    "id": 7,
    "name": "XOX - ‘Only Those who Dare to Dream’ Hoodie",
    "description": "Step out in confidence with the XOX ‘Only Those who Dare to Dream’ Hoodie, a tribute to the visionaries, the risk-takers, and the unstoppable dreamers. This hoodie isn’t just a piece of clothing - it’s a statement about pushing boundaries and chasing greatness.",
    "price": 25000,
    "size": ["XXL", "XXXL"],
    "category": "Hoodies",
    "color": "Black",
    "image": "/‘OnlyThosewhoDaretoDream’Hoodie.png"
  },
  {
    "id": 8,
    "name": "XOX Trucker Cap - Red",
    "description": "Stay sharp and represent the grind with the XOX “On the Move, City Hustle’ Trucker Cap. Designed for those who live life on the go, this cap blends effortless styles with an urban edge, making it the ultimate streetwear accessory.",
    "price": 5000,
    "size": ["One Size Fit All"],
    "category": "Caps",
    "color": "Red",
    "image": "/XOXTruckerCap-RED2 (1).png"
  },
  {
    "id": 9,
    "name": "XOX Trucker Cap - Red",
    "description": "Stay sharp and represent the grind with the XOX “On the Move, City Hustle’ Trucker Cap. Designed for those who live life on the go, this cap blends effortless styles with an urban edge, making it the ultimate streetwear accessory.",
    "price": 5000,
    "size": ["One Size Fit All"],
    "category": "Caps",
    "color": "Red",
    "image": "/XOXTruckerCap-RED2 (2).png"
  },
  {
    "id": 10,
    "name": "Culture is Eternal Shirt - ice",
    "description": "Celebrate the essence of timeless style with the XOX ‘Culture is Eternal’ Shirt. Designed to honor individuality and heritage, this shirt makes bold statements about the power of culture and its everlasting influence.",
    "price": 15000,
    "size": ["L", "XL", "XXL", "XXXL"],
    "category": "Shirts",
    "color": "Purple",
    "image": "/‘CultureisEternal’Shirt-ice.png"
  },
  {
    "id": 11,
    "name": "Culture is Eternal Shirt - Black",
    "description": "Celebrate the essence of timeless style with the XOX ‘Culture is Eternal’ Shirt. Designed to honor individuality and heritage, this shirt makes bold statements about the power of culture and its everlasting influence.",
    "price": 18000,
    "size": ["L", "XL", "XXL", "XXXL"],
    "category": "Shirts",
    "color": "Purple",
    "image": "/‘CultureisEternal’Shirt-Black.png"
  },
  {
    "id": 12,
    "name": "‘Culture is Eternal’ Tee",
    "description": "Make a statement with the XOX ‘Nothin is Real but the Dream’ Designed for those who see the world differently. Featuring the thought-provoking phrase ‘Nothing is real but the dream you choose to live’, this shirt is perfect for dreamers and doers alike.",
    "price": 18000,
    "size": ["L", "XL", "XXL", "XXXL"],
    "category": "Shirts",
    "color": "White",
    "image": "/‘Cultureis Eternal’Tee.png"
  },
  {
    "id": 13,
    "name": "XOX Trucker Cap - Pink",
    "description": "Stay sharp and represent the grind with the XOX “On the Move, City Hustle’ Trucker Cap. Designed for those who live life on the go, this cap blends effortless styles with an urban edge, making it the ultimate streetwear accessory.",
    "price": 5000,
    "size": ["One Size Fit All"],
    "category": "Caps",
    "color": "Red",
    "image": "/XOXTruckerCap -PINK.png"
  },
  {
    "id": 14,
    "name": "XOX Trucker Cap - Brown",
    "description": "Stay sharp and represent the grind with the XOX “On the Move, City Hustle’ Trucker Cap. Designed for those who live life on the go, this cap blends effortless styles with an urban edge, making it the ultimate streetwear accessory.",
    "price": 5000,
    "size": ["One Size Fit All"],
    "category": "Caps",
    "color": "Brown",
    "image": "/XOXTruckerCap-BROWN.png"
  },
  {
    "id": 15,
    "name": "XOX Trucker Cap - Blue",
    "description": "Stay sharp and represent the grind with the XOX “On the Move, City Hustle’ Trucker Cap. Designed for those who live life on the go, this cap blends effortless styles with an urban edge, making it the ultimate streetwear accessory.",
    "price": 5000,
    "size": ["One Size Fit All"],
    "category": "Caps",
    "color": "Blue",
    "image": "/XOXTruckerCap - MAGENTA.png"
  },
  {
    "id": 16,
    "name": "XOX Singlet Tank Top",
    "description": "Stay cool, stylish, and unstoppable with the XOX Center Logo Singlet. Designed for ultimate comfort and street-ready vibes, this is perfect for layering or rocking solo.",
    "price": 5000,
    "size": ["One Size Fit All"],
    "category": "Tops",
    "color": "White",
    "image": "/XOXSingletTankTop2.png"
  },
  {
    "id": 17,
    "name": "XOX Trucker Cap - Magenta",
    "description": "Stay sharp and represent the grind with the XOX “On the Move, City Hustle’ Trucker Cap. Designed for those who live life on the go, this cap blends effortless styles with an urban edge, making it the ultimate streetwear accessory.",
    "price": 5000,
    "size": ["One Size Fit All"],
    "category": "Caps",
    "color": "Magenta",
    "image": "/XOXTruckerCap-BlUE.png"
  },
  {
    "id": 18,
    "name": "XOX Trucker Cap - Black",
    "description": "Stay sharp and represent the grind with the XOX “On the Move, City Hustle’ Trucker Cap. Designed for those who live life on the go, this cap blends effortless styles with an urban edge, making it the ultimate streetwear accessory.",
    "price": 5000,
    "size": ["One Size Fit All"],
    "category": "Caps",
    "color": "Magenta",
    "image": "/black.png"
  }
]

const AllProducts = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

          {/* Product Details */}
          <div className="product-details">
            {/* Design Info */}
            <div className="design-info">
              {/* <span> Culture is Eternal</span> */}
              {/* <span>Color: {product.color}</span> */}
            </div>

            {/* Product Name */}
            <div className="product-name">{product.name}</div>

            {/* Product Price */}
            <div className="product-price">₦{product.price.toLocaleString()}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;