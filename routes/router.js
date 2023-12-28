const express= require('express');
const router =new express.Router();
const { registeruser, loginuser, validuser, logoutuser, sendPasswordLink, verifyuser, changePassword, allProducts, addProduct, updateProduct, deleteProduct, addItemToCart, getuserCart, removeProduct} = require('../controllers/url');
const authenticate = require('../middleware/authenticate');

router.post('/register',registeruser);
router.post('/login',loginuser);
router.get('/validuser',authenticate,validuser);
router.get('/logout',authenticate,logoutuser);
router.post('/sendpasswordlink',sendPasswordLink);
router.get("/forgotpassword/:id/:token",verifyuser)
router.post('/:id/:token',changePassword);


router.get('/allproducts',authenticate,allProducts);

router.post('/addproduct',authenticate,addProduct);

router.put('/updateproduct/:id',authenticate,updateProduct);

router.delete('/deleteproduct/:id',authenticate,deleteProduct);

router.post('/addItemToCart',authenticate,addItemToCart);

router.get('/getuserCart',authenticate,getuserCart);

router.post('/removeprodfromcart',authenticate,removeProduct);

module.exports = router;