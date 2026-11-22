import React from "react";
import "../assets/ProductCard.css";



function ProductCard({ image, name, price, priceDiscount }) {

  return (
  
  <div className="product-card">
  
    <img src={image} alt={name} 
className="product-card-image" />

    
  <h3>{name}</h3>

  
 
   {priceDiscount ? (
  
      <div className="product-prices">
  
        <span className="price-original">
    
        R$ {price.toFixed(2)}
   
       </span>

      
    <span className="price-discount">
  
          R$ {priceDiscount.toFixed(2)}
  
        </span>
    
    </div>
    
  ) : (
     
   <p className="price" style={{color:"red"}}>
  
        R$ {price.toFixed(2)}
     
   </p>
   
   )}
 
   </div>
 
 );

}


export default ProductCard;
 
