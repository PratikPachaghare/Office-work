import React from 'react';

const ProductDetails = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-black">2020 Apple MacBook Pro with Apple M1 Chip</h1>
      <p className="text-gray-500">13-inch, 8GB RAM, 256GB SSD Storage - Space Gray</p>
<div className='flex justify-evenly'>
    <div>
      <div className="flex items-center mt-4">
        <span className="text-yellow-500">★★★★☆</span>
        <p className="ml-2 text-gray-600">(21,671 User feedback)</p>
      </div>

      <div className="mt-4">
        <span className="text-black font-bold">$1699</span>
        <span className="text-gray-500 line-through ml-2">$1999</span>
        <span className="ml-2 text-green-600">21% OFF</span>
      </div>
  
      <div className="mt-4">
        <span className="text-green-500 font-bold">In Stock</span>
      </div>

      <div>
        <p className="font-bold">Color:</p>
        <div className="flex space-x-4 mt-2">
          <button className="w-8 h-8 rounded-full bg-orange-500"></button>
          <button className="w-8 h-8 rounded-full bg-gray-300"></button>
        </div>
      </div>
</div>
      <div className="mt-5">
        <p className=" font-bold">Memory:</p>
        <select className="border p-2 rounded mt-1">
          <option>16GB unified memory</option>
          <option>8GB unified memory</option>
        </select>

        <p className=" font-bold">Size:</p>
        <select className="border p-2 rounded mt-2">
          <option>14-inch Liquid Retina XDR display</option>
        </select>

        <p className=" font-bold">Storage:</p>
        <select className="border p-2 rounded mt-2">
          <option>1TB SSD Storage</option>
          <option>512GB SSD Storage</option>
        </select>
      </div>
  </div>
    </div>
  );
};

export default ProductDetails;
