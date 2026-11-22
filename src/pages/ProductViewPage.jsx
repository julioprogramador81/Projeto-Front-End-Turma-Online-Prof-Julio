import React from "react";
import "../assets/ProductViewPage.css"
import Hslid6 from  "../assets/home-slide-6.jpeg";
import Hslid1 from "../assets/home-slide-1.jpeg";
import Hslid4 from "../assets/home-slide-4.jpeg";
import Hslid3 from "../assets/home-slide-3.jpeg";
import Hslid5 from "../assets/home-slide-5.jpeg";
import Gallery from "../compoments/Gallery";
import  { products } from "../compoments/ProductListing";
  
/*import Section from "../compoments/Section";*/
import ProductOptions from "../compoments/ProductOptions";
import BuyBox from "../compoments/BuyBox";
import Layout from "./Layout ";
import Section from "../compoments/Section";
import ProductList from "../compoments/ProductList ";

function ProductViewPage(){
    const images = [
 
        { src: Hslid4 },
          
        { src: Hslid1 },
          
        { src: Hslid6},

        { src: Hslid3 },

        { src: Hslid5 },
          
       
         
       ];

    return(
      
     
     /* <div className="product-container" style={{display:"flex",  alignItems:"flex-start",  justifyContent:"center",  gap:"40px"}}>*/
     <Layout>
   <div className="product-container" >
   
  <Gallery 
 images={images}
   
   width="700px"
     
   height="570px"
   
    radius="4px"  
   showThumbs
    /* showThumbs={true}*/

    showSection={false}
   
  /> 


<BuyBox
style={{}}
      name="Tênis Esportivo"
      reference="REF-12345"
      stars="4.5"
      rating="120"
      price="R$ 299,90"
      priceDiscount="R$ 199,90"
      description="Tênis confortável para o dia a dia, amortecimento adequado ao uso, estabilidade e materiais resistentes que não causam atrito ou cansaço precoce."
    >
    {/* <ProductOptions />*/}
    <ProductOptions
        options={["39", "40", "41", "42"]}
        shape="square"
        type="text"
        radius="4px"
      />
  <ProductOptions
  options={["#000", "#111", "#f00"]}
  shape="circle"
  type="color"
  radius="4px"
    />
    </BuyBox>
    
   </div>
   <Section title="Produtos recomendados" titleAlign="left">
<ProductList products={products.slice(0, 4)} 
/>
</Section>
   
   </Layout>
   
    );
}

export default ProductViewPage;