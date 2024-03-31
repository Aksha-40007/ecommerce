const Order = require('../models/Order');
const Cart = require('../models/Cart');
const { errorHandler } = require('../utils/errorHandler');

exports.placeOrder = async (req, res) => {
  try {
    const userId = req.user;
    // Get necessary data from request body
    const { deliveryAddress, paymentMode } = req.body;

    // Find the user's cart
    const cart = await Cart.findOne({ userId }).populate('products');

    // Check if the cart exists
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    console.log(cart.products.map((product)=>{console.log("product",product.productId)}));
    // Extract relevant details from cart products
    const orderProducts = cart.products.map(product => ({
      productId: product.productId,
      productPictures: product.productPictures,
      color: product.color,
      name: product.name,
      price: product.price,
    }));

    // Create a new order instance
    const order = new Order({
      userId,
      products: orderProducts,
      items: cart.priceDetails.totalMRP,
      delivery: cart.priceDetails.convenienceFee,
      ordertotal: cart.priceDetails.totalAmount,
      status: 'ordered',
      deliveryAddress,
      paymentMode
    });

    // Save the order
    await order.save();

    // Clear the user's cart after placing the order
    await Cart.findOneAndDelete({ userId });

    res.status(201).json({ order }); // Return the created order
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};


exports.getOrderHistory = async (req, res) => {
  try {
    const {userId} = req.user; 
    const orders = await Order.find(userId).sort({ createdAt: -1 }); 
    res.status(200).json({ orders });
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};
