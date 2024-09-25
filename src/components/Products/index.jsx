import { useState } from "react";
import ProductList from "./ProductList";
import Filter from "./Filter";
import "./Product.css";
import { initialProducts } from "./productsData";

function Products() {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  const getUniqueValues = (key) => {
    return [
      ...new Set(
        initialProducts.map((product) => product[key]).filter(Boolean)
      ),
    ];
  };

  return (
    <div className="container">
      <Filter
        allProducts={initialProducts}
        categories={getUniqueValues("category")}
        brands={getUniqueValues("brand")}
        colors={getUniqueValues("color")}
        operatingSystems={getUniqueValues("os")}
        setFilteredProducts={setFilteredProducts}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Products;
