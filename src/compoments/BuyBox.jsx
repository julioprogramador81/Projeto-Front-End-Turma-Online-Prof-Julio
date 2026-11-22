
/*import starIcon from "../assets/avaliacao.png";*/
import starIcon  from "../assets/star-icon.svg"
import "../assets/BuyBox.css"

import React from 'react';


function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children
}) {
  return (
    <div className="buy-box">
      <h1 className="buy-box-name">{name}</h1>

      <span className="buy-box-reference">
        {reference}
      </span>

      <div className="buy-box-rating">
        <span className="buy-box-stars">
          {stars}
         <img src={starIcon} alt="Estrela" style={{
        width: "20px",
        height: "20px",
       
      
    }}/>
        </span>

        <span className="buy-box-rating-total">
          {rating} avaliações
        </span>
      </div>

      <div className="buy-box-price">
        {priceDiscount ? (
          <>
            <span className="buy-box-price-original">
              {price}
            </span>

            <span className="buy-box-price-discount">
              {priceDiscount}
            </span>
          </>
        ) : (
          <span>{price}</span>
        )}
      </div>

      <p className="buy-box-description">
        {description}
      </p>

      <div className="buy-box-options">
        {children}
      </div>

      <button className="buy-box-button">
        Comprar
      </button>
    </div>
  );
}

export default BuyBox;

