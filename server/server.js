const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./configs/db");
const userRoutes = require("./routers/userRoutes");
const productRoutes = require("./routers/productRoutes");

// Application setup
const app = express();

// Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
dbConnection(MONGO_URI);

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
