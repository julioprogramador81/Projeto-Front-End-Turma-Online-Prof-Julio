import React, { useState } from "react";
import "../assets/Gallery.css"

import botdireita from "../assets/angulo-circulo-direita.png"
import botesq from "../assets/angulo-circulo-esquerda.png"
import Section from "./Section";


function Gallery({
 
    images = [],
     className = "",
    
    width,
    
    height,
    
    radius = "0px",
   
     showThumbs = false,
     showSection = true,
   
   }) {
   
     const [currentIndex, setCurrentIndex] = useState(0);
   
   
     // Ir para a próxima imagem
    
    function nextImage() {
    
      if (currentIndex < images.length - 1) {
    
        setCurrentIndex(currentIndex + 1);
    
      }
    
    }
   
    
    // Voltar para a imagem anterior
   
     function prevImage() {
    
      if (currentIndex > 0) {
     
       setCurrentIndex(currentIndex - 1);
    
      }
    
    }
   
    
    // Selecionar imagem pela miniatura
    
    function selectImage(index) {
     
     setCurrentIndex(index);
   
     }
   
    
    if (images.length === 0) {
    
      return null;
     
   }
   
    
    return (
     
       <div className={`gallery ${className}`}>
        
       
         <div
     
         className="gallery-slide"
    
          style={{
             width: width ? `${width}px` : "100%",
    
            height: height ? `${height}px` : "auto",
     
           borderRadius: radius,
     
         }}
     
       >
       
       <img
     
           src={images[currentIndex].src}
      
          alt={`Imagem ${currentIndex + 1}`}
        
        className="gallery-image"
       
         style={{ borderRadius: radius }}
        
      />
   
        
      {/* Seta esquerda */}
        
      <button
    
        
        className="gallery-arrow gallery-arrow-left" 
    
            onClick={prevImage}
        
        disabled={currentIndex === 0}
     
         >
          
      <img
            
      src={botesq}
      
            alt="Imagem anterior"
            
    />
        
      </button>
   
      
        {/* Seta direita */}
    
          <button
       
         className="gallery-arrow gallery-arrow-right"
     
           onClick={nextImage}
       
         disabled={currentIndex === images.length - 1}
     
         >
       
         <img
       
           src={botdireita}
   
               alt="Próxima imagem"
       
         />
      
        </button>
       
     </div>
   
      
    {/* Miniaturas */}
     
    {showThumbs && (
  showSection ? (
    <Section title="Coleções em destaque" titleAlign="center">
      <div className="gallery-thumbnails" style={{width: width ? `${width}px` : "100%"
  }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Miniatura ${index + 1}`}
            className={`gallery-thumbnail ${
              currentIndex === index ? "selected" : ""
            }`}
            style={{ borderRadius: radius }}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </Section>
  ) : (
    <div className="gallery-thumbnails" style={{width: width ? `${width}px` : "100%",marginTop:"10px", marginBottom:"5px"
  }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Miniatura ${index + 1}`}
          className={`gallery-thumbnail ${
            currentIndex === index ? "selected" : ""
          }`}
          style={{ borderRadius: radius }}
          onClick={() => selectImage(index)}
        />
      ))}
    </div>
  )
)}
   
     
     </div>
    
    );
   
   }
   
   
   export default Gallery;