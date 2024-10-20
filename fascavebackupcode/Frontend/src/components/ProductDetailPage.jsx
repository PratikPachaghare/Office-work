import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

// Sample customer reviews data
const sampleReviews = [
  {
    id: 1,
    customerName: "Alice Johnson",
    review: "Absolutely love this mouse! It feels great and works perfectly.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    customerName: "Bob Smith",
    review: "Good value for the price. Would recommend!",
    rating: 4,
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 3,
    customerName: "Charlie Brown",
    review: "Decent performance, but the battery life could be better.",
    rating: 3,
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 4,
    customerName: "Daisy Miller",
    review: "Great ergonomics and design. Perfect for long hours of work.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 5,
    customerName: "Ethan Hunt",
    review: "Not bad, but I've seen better quality at this price range.",
    rating: 3,
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const location = useLocation(); // Get location to access state
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allProducts, setAllProducts] = useState([]); // State for all products
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (location.state && location.state.product) {
          setProduct(location.state.product);
          setLoading(false);
        } else {
          const response = await fetch(
            `http://localhost:5000/api/products/${id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch product");
          }
          const data = await response.json();
          setProduct(data);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    const fetchAllProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch all products");
        }
        const data = await response.json();
        setAllProducts(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProduct(); // Fetch single product
    fetchAllProducts(); // Fetch all products
  }, [id, location.state]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuyNow = () => {
    alert(`You have bought ${quantity} of ${product.name} (Buy Now)`);
  };

  const handleAddToCart = () => {
    alert(
      `You have added ${quantity} of ${product.name} to your cart (Add to Cart)`
    );
  };

  // Render loading state
  if (loading) {
    return <p>Loading product details...</p>;
  }

  // Render error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-10 bg-customgray">
      {product && (
        <div className="flex flex-col md:flex-row border border-gray-200 rounded-lg p-6 shadow-lg">
          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
          </div>

          <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="flex items-center text-orange-400 mb-2">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
              <span className="text-gray-600 text-sm ml-1">
                ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Price: ${product.price.toFixed(2)}
            </p>

            <div className="flex items-center space-x-2 mb-4">
              <label className="text-lg">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="border border-gray-300 rounded-lg p-2 w-20"
              />
            </div>

            <div className="">
              <Link to={`/payment/${product._id}`} className="w-full ml-1">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg m-3">
                  Buy Now
                </button>
              </Link>

              <button
                onClick={handleAddToCart}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customer Reviews Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {sampleReviews.map((review) => (
            <div
              key={review.id}
              className="flex border-b border-gray-200 pb-4 mb-4"
            >
              <img
                src={review.photo}
                alt={review.customerName}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{review.customerName}</h3>
                <div className="flex items-center text-orange-400 mb-1">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="text-gray-700">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Products Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((prod) => (
            <div
              key={prod._id}
              className="border border-gray-200 rounded-lg p-4 transition-transform transform hover:scale-105 shadow-md relative"
            >
              <Link to={`/product/${prod._id}`}>
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-48 object-cover mb-2 rounded-lg"
                />
                <h3 className="text-lg font-semibold mb-2">{prod.name}</h3>
                <p className="text-lg font-semibold text-gray-800">
                  ${prod.price.toFixed(2)}
                </p>
              </Link>
              <div className="flex items-center text-orange-400 mb-2">
                {"★".repeat(Math.floor(prod.rating))}{" "}
                {/* Display filled stars */}
                {"☆".repeat(5 - Math.floor(prod.rating))}{" "}
                {/* Display empty stars */}
                <span className="text-gray-600 text-sm ml-1">
                  ({prod.reviews} reviews)
                </span>
              </div>
              <button
                onClick={() => handleAddToCart(prod)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg absolute bottom-4 right-4"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
