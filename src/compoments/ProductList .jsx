/*import "../compoments/ProductList.css";*/
import ProductListing from "../compoments/ProductListing";
import ProductCard from "./ProductCard";
/*import Prodimg from "../assets/produc-image-5.jpeg"*/
/*import Hslid1 from "../assets/home-slide-1.jpeg";*/
/*import Hslid4 from "../assets/home-slide-4.jpeg";*/
import "../assets/ProductList .css"


function ProductList({products}){
            

return(

    <div className="product-listing"> 
    {products.map((product, index) => (
    
  <ProductCard 
       key={index}  
      image={product.image}  
      name={product.name}   
     price={product.price} 
       priceDiscount={product.priceDiscount}
 
     />
  
  ))}
  
</div>
);



}
   
export default ProductList;
