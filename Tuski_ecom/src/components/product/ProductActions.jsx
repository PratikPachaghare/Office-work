import React, { useState } from 'react';

const ProductActions = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity(quantity + amount > 0 ? quantity + amount : 1);
  };

  return (
    <div className="m-8">
    <div className="quantity-selector rounded-md flex items-center space-x-2 bg-slate-200 w-fit">
      <button onClick={() => handleQuantityChange(-1)} className="bg-black-300 text-white text-center">-</button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-12 bg-transparent text-black text-center"
      />
      <button onClick={() => handleQuantityChange(1)} className="bg-black-400 text-white text-center">+</button>
    </div>

    <div className="mt-6 flex space-x-4">
      <button className="bg-orange-500 text-white px-4 py-2 rounded">Add to Cart</button>
      <button className="bg-transparent border-orange-500 text-orange-500 px-4 py-2 rounded">Buy Now</button>
    </div>

    <div className="mt-4">
      <button className="bg-transparent text-gray-500 "><i class="fa-solid fa-heart"></i>  Add to Wishlist</button>
      <button className="bg-transparent text-gray-500"><i class="fa-solid fa-code-compare"></i> Add to Compare</button>
    </div>
  </div>
  );
};

export default ProductActions;
