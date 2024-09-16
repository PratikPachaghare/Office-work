// src/ContactUs.js
import React, { useState } from "react";
import Profile from "./Profile";

const ContactUs = () => {
  const [theme, setTheme] = useState("light");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending to a server)
    alert("Message sent!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <button
          onClick={handleThemeToggle}
          className="p-2 bg-blue-500 rounded"
        >
          Toggle Theme
        </button>
      </header>

      <main className="m-20 flex-1 flex justify-between items-center px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg p-8 rounded-lg space-y-6"
        >
          <h2 className="text-3xl font-semibold text-center mb-8">
            Get in Touch with Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-lg font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message"
              className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <Profile/>
      </main>

      <footer className="p-4 bg-gray-700 text-white text-center">
        © 2024 Your Company. All Rights Reserved.
      </footer>
    </div>
  );
};

export default ContactUs;
