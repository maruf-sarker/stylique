const express = require("express");
const customerMiddleware = require("../middlewares/customerMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const {
  getAllProducts,
  createNewProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/create", customerMiddleware, adminMiddleware, createNewProduct);
router.get("/", customerMiddleware, adminMiddleware, getAllProducts);
router.get("/:id", customerMiddleware, adminMiddleware, getProductById);
router.put("/:id", customerMiddleware, adminMiddleware, updateProduct);
router.delete("/:id", customerMiddleware, adminMiddleware, deleteProduct);

module.exports = router;
