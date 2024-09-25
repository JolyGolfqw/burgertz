import { useState, useEffect } from "react";

function Filter({
  allProducts,
  categories,
  brands,
  colors,
  operatingSystems,
  setFilteredProducts,
}) {
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    color: [],
    price: [],
    os: [],
  });

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [availableFilters, setAvailableFilters] = useState({
    category: new Set(),
    brand: new Set(),
    color: new Set(),
    os: new Set(),
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        price: [minPrice, maxPrice],
      }));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    applyFilter();
  }, [filters]);

  const applyFilter = () => {
    let filtered = allProducts;

    for (const key in filters) {
      if (filters[key].length > 0) {
        if (key === "price") {
          const [min, max] = filters.price;
          filtered = filtered.filter((product) => {
            return (
              (min === "" || product.price >= Number(min)) &&
              (max === "" || product.price <= Number(max))
            );
          });
        } else {
          filtered = filtered.filter((product) =>
            filters[key].includes(product[key])
          );
        }
      }
    }

    setFilteredProducts(filtered);
    updateAvailableFilters(filtered);
  };

  const updateAvailableFilters = (filteredProducts) => {
    const newAvailableFilters = {
      category: new Set(),
      brand: new Set(),
      color: new Set(),
      os: new Set(),
    };

    filteredProducts.forEach((product) => {
      newAvailableFilters.category.add(product.category);
      newAvailableFilters.brand.add(product.brand);
      newAvailableFilters.color.add(product.color);
      if (product.os) {
        newAvailableFilters.os.add(product.os);
      }
    });

    setAvailableFilters(newAvailableFilters);
  };

  const handleFilterChange = (filterType, value, checked) => {
    const newFilters = { ...filters };
    if (checked) {
      newFilters[filterType] = [...newFilters[filterType], value];
    } else {
      newFilters[filterType] = newFilters[filterType].filter(
        (v) => v !== value
      );
    }
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      brand: [],
      color: [],
      price: [],
      os: [],
    });
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="filter">
      <h3>Фильтры</h3>

      <h4>Цена</h4>
      <div>
        <input
          type="number"
          placeholder="От"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="До"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <h4>Категория</h4>
      {categories.map((cat) => (
        <label
          key={cat}
          style={{ opacity: !availableFilters.category.has(cat) ? 0.5 : 1 }}
        >
          <input
            type="checkbox"
            value={cat}
            checked={filters.category.includes(cat)}
            onChange={(e) =>
              handleFilterChange("category", e.target.value, e.target.checked)
            }
            disabled={!availableFilters.category.has(cat)}
          />
          {cat}
        </label>
      ))}

      <h4>Бренд</h4>
      {brands.map((brand) => (
        <label
          key={brand}
          style={{ opacity: !availableFilters.brand.has(brand) ? 0.5 : 1 }}
        >
          <input
            type="checkbox"
            value={brand}
            checked={filters.brand.includes(brand)}
            onChange={(e) =>
              handleFilterChange("brand", e.target.value, e.target.checked)
            }
            disabled={!availableFilters.brand.has(brand)}
          />
          {brand}
        </label>
      ))}

      <h4>Цвет</h4>
      {colors.map((color) => (
        <label
          key={color}
          style={{ opacity: !availableFilters.color.has(color) ? 0.5 : 1 }}
        >
          <input
            type="checkbox"
            value={color}
            checked={filters.color.includes(color)}
            onChange={(e) =>
              handleFilterChange("color", e.target.value, e.target.checked)
            }
            disabled={!availableFilters.color.has(color)}
          />
          {color}
        </label>
      ))}

      <h4>Операционная система</h4>
      {operatingSystems.map((os) => (
        <label
          key={os}
          style={{ opacity: !availableFilters.os.has(os) ? 0.5 : 1 }}
        >
          <input
            type="checkbox"
            value={os}
            checked={filters.os.includes(os)}
            onChange={(e) =>
              handleFilterChange("os", e.target.value, e.target.checked)
            }
            disabled={!availableFilters.os.has(os)}
          />
          {os}
        </label>
      ))}

      <button onClick={clearFilters}>Очистить фильтры</button>
    </div>
  );
}

export default Filter;
