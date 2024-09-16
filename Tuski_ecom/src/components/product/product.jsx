import React from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductActions from './ProductActions';

function Product() {
  return (
    <div className='w-11/12h-auto rounded-lg bg-slate-50'>
    <div className="flex justify-center border rounded-md">
      <div className="w-2/3 border rounded-lg m-4">
        <ProductImage/>
      </div>
      <div className=''>
        <ProductDetails />
        <hr/>
        <ProductActions />
        </div>
    </div>
    </div>
  );
}

export default Product;
