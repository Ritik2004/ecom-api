const express = require('express')

const {getProducts, createProduct, productDelete, updateQuantity} = require('../controllers/productController')

const router = express.Router();


router.get("/products", getProducts);

router.post("/create", createProduct);

router.delete("/:productID", productDelete)

//update product quantity
router.post("/:productID/update_quantity/", updateQuantity)

module.exports = router;