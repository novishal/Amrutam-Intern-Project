import express from "express";
import Product from "../models/Product.js";  // ✅ correct (go up one level, then into models)


const router = express.Router();

// @route GET /api/products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route POST /api/products
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
