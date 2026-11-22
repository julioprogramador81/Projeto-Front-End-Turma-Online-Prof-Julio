import logo from './logo.svg';
import Layout from "../src/pages/Layout ";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


 import HomePage from "./pages/HomePage";
 import ProductListingPage from "./pages/ProductListingPage";
 import ProductViewPage from "./pages/ProductViewPage";

function App() {
  return (
  <>

 <BrowserRouter>
 <Routes>
   <Route path="/" element={<HomePage />} />

   <Route path="/produtos" element={<ProductListingPage />} />

   <Route path="/product/:id" element={<ProductViewPage />} />
 </Routes>
</BrowserRouter>
 
  </>
  );
}

export default App;


/*<Layout/>*/