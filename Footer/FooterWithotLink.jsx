import React from 'react';
import PleySotreImage from '../asseat/playStore.png'
import appSotreImage from '../asseat/AppSotre.png'

const FooterWithoutLink = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        
        {/* Logo and Contact Information */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">CLICON</h2>
          <p className="mb-2">Customer Supports:</p>
          <p className="text-yellow-500 font-bold mb-2">(629) 555-0129</p>
          <p className="mb-2">4517 Washington Ave.</p>
          <p className="mb-2">Manchester, Kentucky 39495</p>
          <p>info@clicon.com</p>
        </div>

        {/* Top Category */}
        <div>
          <h3 className="text-white font-semibold mb-4">TOP CATEGORY</h3>
          <ul className="space-y-2">
            <li>Computer & Laptop</li>
            <li>SmartPhone</li>
            <li>Headphone</li>
            <li><span className="text-yellow-500">Accessories</span></li>
            <li>Camera & Photo</li>
            <li>TV & Homes</li>
            <li><span className="text-yellow-500">Browse All Product →</span></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>Shop Product</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>Track Order</li>
            <li>Customer Help</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Download App and Popular Tags */}
        <div className="space-y-6">
          <div>
            <h3 className="text-white font-semibold mb-4">DOWNLOAD APP</h3>
            <div className="space-y-2">
            <img src={PleySotreImage} alt="Google Play"  className='w-2/3 h-20 cursor-pointer'/>
            <img src={appSotreImage} alt="App Store"  className='w-2/3 h-20 cursor-pointer' />
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">POPULAR TAG</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded">Game</span>
              <span className="bg-gray-700 px-2 py-1 rounded">iPhone</span>
              <span className="bg-gray-700 px-2 py-1 rounded">TV</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Asus Laptops</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Macbook</span>
              <span className="bg-gray-700 px-2 py-1 rounded">SSD</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Graphics Card</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Power Bank</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Smart TV</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Speaker</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Tablet</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Microwave</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Samsung</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>© Clicon - eCommerce Template © 2021. Design by Templatecookie</p>
      </div>
    </footer>
  );
};

export default FooterWithoutLink;
