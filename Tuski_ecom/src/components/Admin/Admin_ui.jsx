import React, { useState } from "react";
import Dashboard from "./Dashbord";
import Bar from "./Bar";


function Admin_ui() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className= "w-full">
      <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Bar toggleTheme={toggleTheme} />
        <main className="w-full ml-80 p-8">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default Admin_ui;
