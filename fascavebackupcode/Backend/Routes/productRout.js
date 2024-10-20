
const express = require("express");
const modelProduct = require("../model/model.product");

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
    try {
      const products = await modelProduct.find(); // Fetch all products from the database
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error while fetching products' });
    }
  });

// Add any other routes (like getProductById) if necessary
router.get("/:id", async (req, res) => { // Ensure this route is correct
    try {
      const product = await modelProduct.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while fetching product" });
    }
  });
  

module.exports = router;

