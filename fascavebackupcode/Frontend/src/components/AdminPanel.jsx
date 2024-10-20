import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [theme, setTheme] = useState("light");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    rating: 0,
    reviews: 0,
    label: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update product
      try {
        const response = await fetch(`http://localhost:5000/api/admin/update/${products[editingIndex]._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        const updatedProduct = await response.json();
        const updatedProducts = [...products];
        updatedProducts[editingIndex] = updatedProduct;
        setProducts(updatedProducts);
        setIsEditing(false);
        setEditingIndex(null);
      } catch (error) {
        console.error("Error updating product:", error);
      }
    } else {
      // Add new product
      try {
        const response = await fetch("http://localhost:5000/api/admin/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        const newProduct = await response.json();
        setProducts([...products, newProduct]);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }

    // Reset form
    setProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      rating: 0,
      reviews: 0,
      label: "",
    });
  };

  const handleEdit = (index) => {
    const prodToEdit = products[index];
    setProduct(prodToEdit);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    try {
      const productToDelete = products[index];
      await fetch(`http://localhost:5000/api/admin/delete/${productToDelete._id}`, {
        method: "DELETE",
      });
      const updatedProducts = products.filter((_, i) => i !== index);
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className={`flex ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"} min-h-screen`}>
      <aside className="w-1/5 bg-gray-800 p-4">
        <h2 className="text-xl text-white font-semibold mb-4">Admin Panel</h2>
        <ul>
          <li className="mb-2">
            <button
              onClick={handleThemeToggle}
              className={`p-2 m-3 ${theme === "light" ? "bg-black text-white" : "bg-white text-black"} rounded`}
            >
              {theme === "light" ? "Dark Theme" : "Light Theme"}
            </button>
          </li>
        </ul>
      </aside>
      <div className="w-full overflow-y-scroll">
        <main className="flex-1 p-8">
          <section id="add-product" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{isEditing ? "Edit Product" : "Add New Product"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                placeholder="Product Name"
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
                required={!isEditing}
              />
              {product.image && (
                <img src={product.image} alt="Product" className="w-32 h-32 object-cover my-2" />
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
              <input
                type="number"
                name="rating"
                value={product.rating}
                onChange={handleInputChange}
                placeholder="Product Rating"
                className="p-2 border rounded w-full"
              />
              <input
                type="number"
                name="reviews"
                value={product.reviews}
                onChange={handleInputChange}
                placeholder="Number of Reviews"
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                name="label"
                value={product.label}
                onChange={handleInputChange}
                placeholder="Product Label"
                className="p-2 border rounded w-full"
              />
              <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                {isEditing ? "Update Product" : "Add Product"}
              </button>
            </form>
          </section>

          <section id="product-list">
            <h2 className="text-2xl font-semibold mb-4">Product List</h2>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Description</th>
                  <th className="border px-4 py-2">Price</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod, index) => (
                  <tr key={prod._id}>
                    <td className="border px-4 py-2">{prod.name}</td>
                    <td className="border px-4 py-2">{prod.description}</td>
                    <td className="border px-4 py-2">${prod.price}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-yellow-500 text-white rounded p-1 m-1"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white rounded p-1 m-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
