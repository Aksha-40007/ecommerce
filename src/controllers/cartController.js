const Cart = require('../models/Cart');
const { errorHandler } = require('../utils/errorHandler');
const mongoose = require('mongoose');

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const existingCart = await Cart.findOne({ userId: req.user });
    const productDetails = await mongoose.model('Product').findById(productId);
    if (existingCart && quantity>0) {
      const existingProduct = existingCart.products.find(p => p.productId.toString() === productId);
      if (existingProduct ) {
        // If the product already exists in the cart, increase its quantity
        existingProduct.quantity += quantity;
      } else {
        // If the product doesn't exist in the cart, add it to the products array
        existingCart.products.push({ productId, quantity,
          name: productDetails.name,
          color: productDetails.color,
          availability: productDetails.availability,
          price: productDetails.price,
          company: productDetails.company });
      }

      // Recalculate price details
      await existingCart.save();

      res.status(200).json(existingCart);
    } else {
      // If the cart doesn't exist, create a new cart and add the product to it
      const productDetails = await mongoose.model('Product').findById(productId);
      const cart = new Cart({ userId: req.user, products: [{ productId, quantity,
        name: productDetails.name,
        color: productDetails.color,
        availability: productDetails.availability,
        price: productDetails.price,
        company: productDetails.company }] });
      if(quantity>0){
        await cart.save();
      res.status(201).json(cart);
      }
      else{
        res.status(404).json({error:"error while adding product"})
      }
    }
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

// Function to retrieve the user's cart
exports.getCart = async (req, res) => {
  try {
      const cart = await Cart.findOne({ userId: req.user });
      if (!cart ) {
          return res.status(404).json({ message: "Cart not found for this user " });
      }
      if(cart.products.length === 0){
        return res.status(404).json({ message: "Cart does not contain any product" });
      }
      
      const totalCount = cart.products.reduce((total, product) => total + product.quantity, 0);

      res.status(200).json({ cart, count: totalCount });
  } catch (error) {
      errorHandler(res, 500, error.message);
  }
};


  // Function to update the user's cart
  // exports.updateCart = async (req, res) => {
  //   try {
  //     const { productId, quantity } = req.body;
  //     const cart = await Cart.findOne({ userId: req.user });
  
  //     if (!cart) {
  //       return res.status(404).json({ message: "Cart not found" });
  //     }
  
  //     const existingProductIndex = cart.products.findIndex(p => p.productId.toString() === productId);
  //     if (existingProductIndex !== -1) {
  //       cart.products[existingProductIndex].quantity = quantity;
  //     } else {
  //       cart.products.push({ productId, quantity });
  //     }
      
  //     await cart.save();
  //     res.status(200).json(cart);
  //   } catch (error) {
  //     errorHandler(res, 500, error.message);
  //   }
  // };
  
  // Function to delete a product from the user's cart
  // exports.deleteFromCart = async (req, res) => {
  //   try {
  //     const productId = req.params.productId;
  //     const cart = await Cart.findOne({ userId: req.user });
  
  //     if (!cart) {
  //       return res.status(404).json({ message: "Cart not found" });
  //     }
  
  //     cart.products = cart.products.filter(product => product.productId.toString() !== productId);
      
  //     await cart.save();
  //     res.status(200).json(cart);
  //   } catch (error) {
  //     errorHandler(res, 500, error.message);
  //   }
  // };
// Other cart-related controller functions such as getCart, updateCart, deleteFromCart, etc.
