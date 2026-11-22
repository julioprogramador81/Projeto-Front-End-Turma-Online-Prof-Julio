import React from 'react';
import Header from '../compoments/Header';
import Footer from "../compoments/Footer";

import FilterGroup from "../compoments/FilterGroup";

import HomePage from './HomePage';
import ProductListingPage from './ProductListingPage';
import ProductViewPage from './ProductViewPage';


// Definindo o componente de layout
const Layout = ({ children }) => {
  return (
    <div style={{ overflow:"hidden"}}>
      {/* Componente do cabeçalho */}
      
    <Header /> 
      

      {/* Conteúdo dinâmico das páginas */}
      {children}
     {/* <HomePage/> */}
      
   {/* <ProductListingPage/>*/}
  {/*<ProductViewPage/> */}




 
  
   

      









      {/* Componente do rodapé */}
      
      <Footer />
      
    
    </div>
  );
};

export default Layout;