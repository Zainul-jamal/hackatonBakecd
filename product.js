// const express = require("express");
// const mongoose = require("mongoose");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json())

// // User Schema
// app.post("/product",(req , res)=>{
//     const body = req.body;

// })

// app.get("/product",(req, res)=>{
//     res.send("Get request to product")
// })

// app.put("/product/:id",(req, res)=>{
//     res.send(`Update request for product with id ${req.params.id}`)
// })

// app.delete("/product/:id",(req, res)=>{
//     res.send(`Delete request for product with id ${req.params.id}`)
// })









// // MongoDB connection

// // Product Schema and Model
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   description: { type: String },
// });

// const Product = mongoose.model("Product", productSchema);

// // POST: Create a new product
// app.post("/product", async (req, res) => {
//   try {
//     const { name, price, description } = req.body;
//     if (!name || !price) {
//       return res.status(400).json({ message: "Name and price are required" });
//     }

//     const newProduct = new Product({ name, price, description });
//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (err) {
//     res.status(500).json({ message: "Error creating product", error: err.message });
//   }
// });

// // GET: Retrieve all products
// app.get("/product", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching products", error: err.message });
//   }
// });

// // GET: Retrieve a product by ID
// app.get("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching product", error: err.message });
//   }
// });

// // PUT: Update a product by ID
// app.put("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, price, description } = req.body;

//     const updatedProduct = await Product.findByIdAndUpdate(
//       id,
//       { name, price, description },
//       { new: true, runValidators: true }
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(500).json({ message: "Error updating product", error: err.message });
//   }
// });

// // DELETE: Remove a product by ID
// app.delete("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deletedProduct = await Product.findByIdAndDelete(id);

//     if (!deletedProduct) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Error deleting product", error: err.message });
//   }
// });
