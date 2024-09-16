import React, { useState } from 'react';
import laptop from '../asseat/laptop.png';
import laptop2 from '../asseat/laptop2.png';
import laptop3 from '../asseat/laptop3.png';

const ProductImage = () => {
  const [mainI, setMainI] = useState(laptop);

  // Function to update main image
  const updateMainImage = (image) => {
    setMainI(image);
  };

  return (
    <div className="product-image m-9">
      {/* Display the currently selected main image */}
      <div className='w-full bg-white rounded-lg'>
      <img src={mainI} alt="Product" className="main-image w-2/3 h-auto" />
        </div>
      {/* Thumbnail gallery */}
      <div className="w-fit image-gallery m-3 flex border bg-slate-300 rounded-md">
        {/* Thumbnails with onClick handlers */}
        <img
          src={laptop}
          alt="thumbnail"
          className="w-24 m-2 cursor-pointer border"
          onClick={() => updateMainImage(laptop)}
        />
        <img
          src={laptop2}
          alt="thumbnail"
          className="w-24 m-2 cursor-pointer border-black"
          onClick={() => updateMainImage(laptop2)}
        />
        <img
          src={laptop3}
          alt="thumbnail"
          className="w-24 m-2 cursor-pointer border"
          onClick={() => updateMainImage(laptop3)}
        />
      </div>
    </div>
  );
};

export default ProductImage;
