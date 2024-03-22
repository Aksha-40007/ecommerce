const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 },
    name: String,
    color: String,
    availability: Boolean,
    price: Number,
    company:String
  }],
  priceDetails: {
    totalMRP: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    convenienceFee: { type: Number, default: 0 },
    totalAmount: { type: Number, default: 0 }
  }
});

cartSchema.pre('save', async function(next) {
    try {
      const productsPromises = this.products.map(async (product) => {
        const productDetails = await mongoose.model('Product').findById(product.productId);
        product.name = productDetails.name;
        product.color = productDetails.color;
        product.availability = productDetails.availability;
        product.price = productDetails.price;
        return product;
      });
      this.products = await Promise.all(productsPromises);
  
      // Calculate price details
      this.priceDetails.totalMRP = this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
      
      // Calculate discount
      const discountPercentage = Math.round(Math.random() * 51); // Random discount between 0 and 50%
      this.priceDetails.discount=discountPercentage;

      const discountcalculation = parseInt((this.priceDetails.totalMRP * discountPercentage / 100)); // Limit to 2 decimal places

      // Apply convenience fee
      this.priceDetails.convenienceFee = 45;
  
      this.priceDetails.totalAmount = this.priceDetails.totalMRP - discountcalculation + this.priceDetails.convenienceFee;
      next();
    } catch (error) {
      next(error);
    }
});
  
module.exports = mongoose.model('Cart', cartSchema);