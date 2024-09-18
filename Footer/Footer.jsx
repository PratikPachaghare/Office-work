import React from 'react'
import PleySotreImage from '../asseat/playStore.png'
import appSotreImage from '../asseat/AppSotre.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        
        {/* Logo and Contact Information */}
        <div>
          <h2 className="text-orange-500 font-bold text-xl mb-4">CLICON</h2>
          <p className="mb-2">Customer Supports:</p>
          <p className="text-gray-300 font-bold mb-2">(629) 555-0129</p>
          <p className="mb-2">4517 Washington Ave.</p>
          <p className="mb-2">Manchester, Kentucky 39495</p>
          <p>info@clicon.com</p>
        </div>

        {/* Top Category */}
        <div>
          <h3 className="text-gray-100 font-semibold mb-4">TOP CATEGORY</h3>
          <ul className="space-y-2">
            <li>
              <a href="/category/computer-laptop" className="cursor-pointer hover:text-gray-200">Computer & Laptop</a>
            </li>
            <li>
              <a href="/category/smartphone" className="cursor-pointer hover:text-gray-200">SmartPhone</a>
            </li>
            <li>
              <a href="/category/headphone" className="cursor-pointer hover:text-gray-200">Headphone</a>
            </li>
            <li>
              <a href="/category/accessories" className="text-yellow-500 cursor-pointer hover:text-yellow-400">Accessories</a>
            </li>
            <li>
              <a href="/category/camera-photo" className="cursor-pointer hover:text-gray-200">Camera & Photo</a>
            </li>
            <li>
              <a href="/category/tv-homes" className="cursor-pointer hover:text-gray-200">TV & Homes</a>
            </li>
            <li>
              <a href="/products/all" className="text-yellow-500 cursor-pointer hover:text-yellow-400">Browse All Product →</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-100 font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>
              <a href="/products/shop" className="cursor-pointer hover:text-gray-200">Shop Product</a>
            </li>
            <li>
              <a href="/cart" className="cursor-pointer hover:text-gray-200">Shopping Cart</a>
            </li>
            <li>
              <a href="/wishlist" className="cursor-pointer hover:text-gray-200">Wishlist</a>
            </li>
            <li>
              <a href="/compare" className="cursor-pointer hover:text-gray-200">Compare</a>
            </li>
            <li>
              <a href="/track-order" className="cursor-pointer hover:text-gray-200">Track Order</a>
            </li>
            <li>
              <a href="/help" className="cursor-pointer hover:text-gray-200">Customer Help</a>
            </li>
            <li>
              <a href="/about-us" className="cursor-pointer hover:text-gray-200">About Us</a>
            </li>
          </ul>
        </div>

        {/* Download App and Popular Tags */}
        <div className="space-y-6">
          <div>
            <h3 className="text-gray-100 font-semibold mb-4">DOWNLOAD APP</h3>
            <div className="space-y-2">
              <img src={PleySotreImage} alt="Google Play"  className='w-2/3 h-20 cursor-pointer'/>
              <img src={appSotreImage} alt="App Store"  className='w-2/3 h-20 cursor-pointer' />
            </div>
          </div>
          <div>
            <h3 className="text-gray-100 font-semibold mb-4">POPULAR TAG</h3>
            <div className="flex flex-wrap gap-2">
              <a href="/products/game" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">Game</a>
              <a href="/products/iphone" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">iPhone</a>
              <a href="/products/tv" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">TV</a>
              <a href="/products/asus-laptops" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">Asus Laptops</a>
              <a href="/products/macbook" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">Macbook</a>
              <a href="/products/ssd" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">SSD</a>
              <a href="/products/graphics-card" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">Graphics Card</a>
              <a href="/products/power-bank" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">Power Bank</a>
              <a href="/products/smart-tv" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">Smart TV</a>
              <a href="/products/speaker" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">Speaker</a>
              <a href="/products/tablet" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">Tablet</a>
              <a href="/products/microwave" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">Microwave</a>
              <a href="/products/samsung" className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">Samsung</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-500">
        <p>Clicon - eCommerce Template © 2021. Design by Templatecookie</p>
      </div>
    </footer>
  );
};

export default Footer;
