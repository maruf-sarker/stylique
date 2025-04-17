const Product = require("../models/Product");
const jwt = require("jsonwebtoken");

const getAllProducts = async (req, res) => {

}

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

const getProductById = async (req, res) => {

}

const updateProduct = async (req, res) = {
  try{
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
    } = req.body

    // find product by id
    const product = await Product.findById(req.params.id);

    if(product){
      // update product fields
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.collections = collections || product.collections;
      product.material = material || product.material;
      product.gender = gender || product.gender;
      product.images = images || product.images;
      product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished = isPublished !== undefined ? isPublished : product.isPublished;
      product.tags = tags || product.tags;
      product.dimensions = dimensions || product.dimensions;
      product.weight = weight || product.weight;
      product.sku = sku || product.sku;

      // save the updated product
      const updatedProduct = await product.save()
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error",
    });
  }
}

const deleteProduct = async (req, res) = {

}

module.exports = {
  getAllProducts,
  createNewProduct,
  getProductById,
  updateProduct,
  deleteProduct
};