// adminRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/productModel"); // Adjust path as needed

// Add Product
router.post("/add", async (req, res) => {
  const { name, description, price, image, rating, reviews, label } = req.body;
  try {
    const newProduct = new Product({ name, description, price, image, rating, reviews, label });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Server error while adding product" });
  }
});

// Update Product
router.put("/update/:id", async (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Server error while updating product" });
  }
});

// Delete Product
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Server error while deleting product" });
  }
});

// Fetch Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Server error while fetching products" });
  }
});

module.exports = router;
