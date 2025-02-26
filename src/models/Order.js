const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  products: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      color: String,
      price: Number, 
      convenienceFee: Number, 
      productPictures: [{ img: { type: String } }]
  }],
  ordertotal: { type: Number, required: true }, // Total amount for the order
  status: { type: String, enum: ['ordered', 'pending'], default: 'pending' }, 
  deliveryAddress: { type: String, required: true },
  paymentMode: { type: String, enum: ['Pay on Delivery', 'UPI', 'Card'], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
