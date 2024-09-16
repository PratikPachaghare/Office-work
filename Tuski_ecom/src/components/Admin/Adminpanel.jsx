import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [theme, setTheme] = useState("light");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Load products from localStorage when the component is mounted
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  // Save products to localStorage whenever the products array changes
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = product;
      setProducts(updatedProducts);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setProducts([...products, product]);
    }

    // Reset form
    setProduct({
      title: "",
      description: "",
      image: "",
      price: "",
    });
  };

  const handleEdit = (index) => {
    const prodToEdit = products[index];
    setProduct(prodToEdit);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div
      className={`flex ${
        theme === "light" ? "bg-white  text-black" : "bg-gray-900 text-white"
      } min-h-screen`}
    >
      <aside className="w-1/5 bg-gray-800 p-4 ">
        <h2 className="text-xl text-white font-semibold mb-4">Admin Panel</h2>
        <ul>
          <li className="mb-2">
            <button
              onClick={handleThemeToggle}
              className={`p-2 m-3 ${theme === "light" ? "bg-black text-white" : "bg-white text-black" }  rounded `}
            >
              {theme === "light" ? "dark Theme" : "light Theme" }
            </button>
          </li>
          <li className="mb-2 flex flex-col gap-3 ">
            <div>
              <button className="p-2 w-11/12 bg-blue-500 text-white rounded">
                <a href="#addProduct" className="text-white w-full ">
                  Add Products
                </a>
              </button>
            </div>
          </li>
          <li className="mb-2">
            <button className="p-2 w-11/12 bg-blue-500 text-white rounded">
              <a href="#products" className="text-white w-full ">
                Show Products
              </a>
            </button>
          </li>
        </ul>
      </aside>
      <div id="addProduct" className="w-full overflow-y-scroll ">
        <main className="flex-1 p-8">
          <section id="add-product" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {isEditing ? "Edit Product" : "Add New Product"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                value={product.title}
                onChange={handleInputChange}
                placeholder="Product Title"
                className="p-2 border rounded w-full"
                required
              />
              <textarea
                name="description"
                value={product.description}
                onChange={handleInputChange}
                placeholder="Product Description"
                className="p-2 border rounded w-full"
                required
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="border rounded w-full"
                required={!isEditing} // Don't require image input while editing
              />
              {product.image && (
                <img
                  src={product.image}
                  alt="Product"
                  className="w-32 h-32 object-cover my-2"
                />
              )}
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                placeholder="Product Price"
                className="p-2 border rounded w-full"
                required
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded"
              >
                {isEditing ? "Update Product" : "Add Product"}
              </button>
            </form>
          </section>
          <section id="products">
            <h2 className="text-2xl font-semibold mb-4">Products List</h2>
            {products.length === 0 ? (
              <p>No products added yet.</p>
            ) : (
              <ul className="space-y-4">
                {products.map((prod, index) => (
                  <li
                    key={index}
                    className="border flex justify-between p-4 rounded"
                  >
                    <div className="w-full flex justify-between">
                      <div>
                        {prod.image && (
                          <img
                            src={prod.image}
                            alt={prod.title}
                            className="w-32 h-32 object-cover my-2"
                          />
                        )}
                      </div>
                      <div className="w-4/5 flex justify-between">
                        <div>
                          <h3 className="font-bold">Name: {prod.title}</h3>
                          <p className="w-full">Description: {prod.description}</p>
                          <p className="font-bold">Price: {prod.price}</p>
                        </div>
                        <div className="flex flex-col">
                          <button
                            className="bg-green-500 m-2 text-center text-white w-24 h-9"
                            onClick={() => handleEdit(index)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-600 text-center w-auto h-9 text-white"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
