



import React from "react";

import Hslid5 from "../assets/home-slide-5.jpeg";
import Hslid1 from "../assets/home-slide-1.jpeg";
import Hslid4 from "../assets/home-slide-4.jpeg";
import Gallery from "../compoments/Gallery";
import ProductListing from "../compoments/ProductListing";
import Section from "../compoments/Section";
import "../assets/Section.css"
import ProductList from "../compoments/ProductList ";
import  { products } from "../compoments/ProductListing";
import Layout from "./Layout ";


    function HomePage(){
  
    const images = [
 
        { src: Hslid4 },
          
        { src: Hslid1 },
          
        { src: Hslid5 },

       
 
          
       
         
       ];

       
   return(
<Layout>
<div style={{marginBottom:"10px", padding:"0px"}}>
 
{ /*<h1 style={{marginLeft:"50px",marginBottom:"5px"}}>Lista de Produtos</h1>*/}

<div>
<Gallery
 images={images}
   
 width="1440px"
   
 height="681px"
 
  radius="4px"
  
  showThumbs
/> 




</div>

<Section title="Produtos em alta" titleAlign="left" >
<ProductList products={products.slice(0, 8)} 
/>
</Section>



 </div>
 </Layout>
 
   );


}



export default HomePage;

