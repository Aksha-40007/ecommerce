const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true},
  description: { type: String, required: true },
  productPictures: [{ img: { type: String } }],
  quantity: {type: Number, required: true},
  offers: {type: Number},
  summary: { type: String, required: true },
  availability: { type: Boolean, required: true },
  reviews: [
    {
        userId: {type:mongoose.Schema.Types.ObjectId,ref: 'User'},
        review : String 
    }
],
  price: { type: Number, required: true },
  company: { type: String , required: true},
  color: { type: String, required: true },
  headphonetype: { type: String , required: true},
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
});

productSchema.pre('save', function(next) {
    if (this.quantity > 0) {
      this.availability = true;
    } else {
      this.availability = false;
    }
    next();
  });
   

// Define a virtual property to calculate the number of unique customers who have rated the product
productSchema.virtual('customerRatingCount').get(function() {
  if (!Array.isArray(this.reviews)) {
      return 0;
  }
  
  const uniqueUserIds = new Set(this.reviews.filter(review => review.rating > 0)
                                           .map(review => review.userId.toString()));
  return uniqueUserIds.size;
});

// Apply the virtual property to schema
productSchema.set('toObject', { virtuals: true });
productSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', productSchema);