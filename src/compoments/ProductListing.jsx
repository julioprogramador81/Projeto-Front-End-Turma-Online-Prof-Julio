
import { useMemo, useState } from 'react';
import ProductCard from "../compoments/ProductCard";
import "../assets/ProductListing.css"
import FilterGroup from "../compoments/FilterGroup";
import Section from "../compoments/Section";
/*import ProductList from "../compoments/ProductList "*/
import Prodimg from "../assets/produc-image-1.jpeg"
import Prodimg3 from "../assets/produc-image-3.jpeg"
import Prodimg5 from "../assets/produc-image-5.jpeg"
import Hslid1 from "../assets/home-slide-1.jpeg";
import Hslid3 from "../assets/home-slide-3.jpeg"
import Hslid4 from "../assets/home-slide-4.jpeg";
import Hslid5 from "../assets/home-slide-5.jpeg";
import Hslid6 from  "../assets/home-slide-6.jpeg";
import Hslid8 from  "../assets/home-slide-8.jpeg";


export const products = [
  
  {
    
  name: "Tênis Esportivo",
 
     image:   Prodimg,   
     price: 200,  
     priceDiscount: 149.9,
     category: 'esporte e lazer',
     brand: 'nike',
     gender: 'masculino'
   
 },
   
 {
      
name: "Tenis Colorido Casual",
  
    image:  Prodimg3,
  
    price: 14.9,
    priceDiscount: 9.9,
    category: 'tenis',
    brand: 'adidas',
    gender: 'feminino'
   

 },
 {
 name: "Tênis Esportivo",
  
    image: Prodimg5 ,
  
    price: 179.9,
    priceDiscount: 149.9, 
    
    category: 'esporte e lazer',
    brand: 'nike',
    gender: 'masculino'
   

 },
 {
  name: "Nike esporte e lazer",  
  image: Hslid4,
  price: 125.9,
  priceDiscount: 99.9,
  category: 'esporte e lazer',
  brand: 'nike',
  gender: 'masculino'


},
{
name: "Casual Escuro B",  
image:  Hslid5,
price: 99.9,
priceDiscount: 79.9,
category: 'tenis',
 brand: 'puma',
 gender: 'masculino'



},
{
name: " Casual Para Criança",
    
image:  Hslid6,

price: 9.9,
priceDiscount: 14.9,
category: 'casual',
brand: 'nike',
gender: 'crianca'


},
{
  name: "Tenes H Casual",
      
  image: Hslid8,  
  price: 149.9,
  priceDiscount: 129.9,
  category: 'casual',
  brand: 'nike',
  gender: 'masculino'
  
  
  },
  {
    name: "Tenis Esportivo verde",
        
    image:   Prodimg,
    
    price: 200.9,
    priceDiscount: 190.9,
    category: 'tenis',
    brand: 'adidas',
    gender: 'feminino'

    
    
    },
    {
      name: "Camisa Casual",
          
      image:  Hslid1,
      
      price: 149.9,
      priceDiscount: 179.9,
      category: 'tenis',
      brand: 'adidas',
      gender: 'feminino'
  
      
      
      },
      {
        name: "Camisa Casual",
            
        image:   Hslid3,
        
        price: 59.9,
        priceDiscount: 34.9,
        category: 'tenis',
        brand: 'adidas',
        gender: 'feminino'
    
        
        
        },

        {
          name: "Camisa Casual",
              
          image:   Hslid4,
          
          price: 189.9,
          priceDiscount: 149.9,
          category: 'casual',
          brand: 'adidas',
          gender: 'feminino'
      
          
          
          },
          {
            name: "Camisa Casual",
                
            image:   Hslid5,
            
            price: 170.9,
            priceDiscount: 140.9,
            category: 'tenis',
            brand: 'adidas',
            gender: 'feminino'
        
            
            
            },
            {
              name: "Camisa Casual",
                  
              image:   Hslid3,
              
              price: 91.9,
              priceDiscount: 84.9,
              category: 'tenis',
              brand: 'adidas',
              gender: 'feminino'
          
              
              
              },
      
              {
                name: "Camisa Casual",
                    
                image:   Hslid4,
                
                price: 109.9,
                priceDiscount: 99.9,
                category: 'casual',
                brand: 'adidas',
                gender: 'feminino'
            
                
                
                },
                {
                  name: "Camisa Casual",
                      
                  image:   Hslid5,
                  
                  price: 79.9,
                  priceDiscount: 54.9,
                  category: 'tenis',
                  brand: 'adidas',
                  gender: 'feminino'
              
                  
                  
                  },

];



 function ProductListing() {
  return(
<>
</>
 
  );
}
export default ProductListing;
