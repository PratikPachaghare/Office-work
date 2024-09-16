import React from 'react';
import { useState } from 'react';
import AdminPanel from './components/Admin/Adminpanel';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    // <div className=''>
    // <h1 className='text-black'>Navbar</h1>
    // {/* <div className="h-screen flex items-center justify-center bg-gray-100">
    //   {isLogin ? <Login toggleAuthMode={toggleAuthMode} /> : <Register toggleAuthMode={toggleAuthMode} />}
    // </div> */}
    // <Product/>
    // <Admin_ui/>
    
    // <h1 className='text-black'>sagetion product</h1>
    // <h1 className='text-black'> footer</h1>
   <div className='w-full'>
   {/* <AdminPanel/> */}
   <ContactUs/>
   </div>
  );
}

export default App;
