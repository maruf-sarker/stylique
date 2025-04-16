const Product = require("../models/Product");
const jwt = require("jsonwebtoken");

const createNewProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      user: req.user._id, // Referencing the user who created the product (admin)
    });

    const savedProduct = await product.save();
    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      data: savedProduct,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error",
    });
  }
};

module.exports = {
  createNewProduct,
};