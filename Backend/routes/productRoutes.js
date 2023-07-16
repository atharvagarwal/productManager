const express = require('express');
const router = express.Router();
const { createProduct,getProduct,filterProduct,createCategory,getCategory,filterDesc,deleteProduct,updateProduct } = require('../controller/productController');

router.post('/createProduct', createProduct);
router.get('/getProduct', getProduct);
router.get('/filter/:category', filterProduct);
router.post('/createCategory', createCategory);
router.get('/getCategory', getCategory);
router.get('/filterDesc/:desc',filterDesc);
router.delete('/deleteProduct/:id',deleteProduct);
router.patch('/updateProduct/:id', updateProduct);


module.exports = router;