
import { useState } from "react";
import "../assets/ProductOptions.css"

function ProductOptions({ options = [], radius, shape, type }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="product-options">
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          className={`product-option ${shape} ${type} ${
            selected === index ? "selected" : ""
          }`}
          style={{
            borderRadius: shape === "square" ? radius : "50%",
            backgroundColor: type === "color" ? option : "transparent",
          }}
          onClick={() => setSelected(index)}
        >
          {type === "text" && option}
        </button>
      ))}
    </div>
  );
}

export default ProductOptions;
