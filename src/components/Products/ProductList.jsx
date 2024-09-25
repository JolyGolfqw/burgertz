import React from "react";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Категория: {product.category}</p>
            <p>Бренд: {product.brand}</p>
            <p>Цвет: {product.color}</p>
            <p>Цена: {product.price} ₽</p>
          </div>
        ))
      ) : (
        <p>Товаров нет</p>
      )}
    </div>
  );
}

export default ProductList;
