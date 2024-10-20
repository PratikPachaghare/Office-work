import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewArrived() {
   const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-8">
           <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search for anything..."
          className="p-2 border rounded w-1/3"
        />
        <select className="p-2 border rounded">
          <option>Most Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* Product Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {products.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewArrived;
