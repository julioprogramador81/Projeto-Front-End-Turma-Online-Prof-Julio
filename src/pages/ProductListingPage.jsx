
import React, { useState } from 'react';
import FilterGroup from "../compoments/FilterGroup";
import Section from '../compoments/Section';
import ProductList from '../compoments/ProductList ';
import { products } from "../compoments/ProductListing";
import Layout from './Layout ';
import "../App.css";

function ProductListingPage() {

  // Estados dos filtros
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  // Função para selecionar e desmarcar opções
  function handleFilter(value, selected, setSelected) {

    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected([...selected, value]);
    }

  }

  // Filtragem dos produtos
  const filteredProducts = products.filter(product => {

    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand);

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const genderMatch =
      selectedGenders.length === 0 ||
      selectedGenders.includes(product.gender);

    return brandMatch && categoryMatch && genderMatch;

  }); 
  {/*adicionado ver ou apaga*/ }
  const sortedProducts = [...filteredProducts].sort((a, b) => {

    if (sortOrder === "asc") {
      return a.priceDiscount - b.priceDiscount;
    }
  
    if (sortOrder === "desc") {
      return b.priceDiscount - a.priceDiscount;
    }
  
  });

  return (
    
    <Layout>


    <div style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "22px",
      width: "100%",
      marginLeft:"30px"
    }}>



      <aside className="filter-sidebar" style={{
        width: "308px",
       background: "var(--white)",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        flexShrink: 0
      }}>
       

      { /*-----------ver ou apaga ate palavra*/}

      <div className="sort-container" style={{
  display: "flex",
  flexDirection: "column",
  gap: "8px"
}}>
  <label htmlFor="sort" style={{
    fontSize: "16px",
    color: "var(--dark-gray-2)"
  }}>
    Ordenar por
  </label>

  <select
    id="sort"
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    style={{ width: "308px", height: "60px",color:"var(--dark-gray-2)" }}
  >
    <option value="asc" style={{color:"var(--dark-gray-2)",}}>Menor preço</option>
    <option value="desc" style={{color:"var(--dark-gray-2)",}}>Maior preço</option>
  </select>
</div>

        <h2 style={{fontSize:"16px",color:"var(--dark-gray-2)",}}>Filtrar por</h2>
        <div className="filter-sidebar-divider" style={{ width:'100%',height:"1px", backgroundColor:"var(--light-gray-2)", marginBottom:"8px",marginTop:"5px" }} />
        {/* FILTRO DE MARCAS */}
        <FilterGroup
          title="Marca"
          inputType="checkbox"
          selected={selectedBrands}
          onChange={(value) =>
            handleFilter(value, selectedBrands, setSelectedBrands)
          }
          options={[
            { text: "Adidas", value: "adidas" },
            { text: "Nike", value: "nike" },
            { text: "Puma", value: "puma" },
            { text: "Asics", value: "asics" },
            { text: "Olympikus", value: "olympikus" }
          ]}
        />

        {/* FILTRO DE CATEGORIAS */}
        <FilterGroup
          title="Categoria"
          inputType="checkbox"
          selected={selectedCategories}
          onChange={(value) =>
            handleFilter(value, selectedCategories, setSelectedCategories)
          }
          options={[
            {text: "Esporte e lazer", value: "esporte e lazer"},
            {text: "Casual", value: "casual"},
            { text: "Utilitário", value: "utilitário" },
            { text: "Roupas", value: "roupas" },
            { text: "Tenis", value: "Tenis" }
          ]}
        />

        {/* FILTRO DE GÊNERO */}
        <FilterGroup
          title="Gênero"
          inputType="checkbox"
          selected={selectedGenders}
          onChange={(value) =>
            handleFilter(value, selectedGenders, setSelectedGenders)
          }
          options={[
            { text: "Masculino", value: "masculino" },
            { text: "Feminino", value: "feminino" },
            { text: "Criança", value: "crianca" },
            { text: "Unissex ", value: "unissex " }
          ]}
        />

      </aside>

      <main style={{
        flex: 1,
        minWidth: 0
      }}>




        <Section  title={`${sortedProducts.length} produtos encontrados`} titleAlign="left" >
       
         { /*<ProductList products={filteredProducts} />*/}
          <ProductList products={sortedProducts} />

        </Section>

      </main>

    </div>
    </Layout>
  );
}

export default ProductListingPage;


