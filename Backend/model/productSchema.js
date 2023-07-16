const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  categoryName:{
    type: String,
  },
  productImage:{
    type: String,
  },
  price: {
    type: Number,
  },
  manufacturerName: {
    type: String,
  },
  manufacturerContact:{
    type:String,
  },
  qty: {
    type:Number,
  },
  descOne:{
    type:String,
  },
  descTwo:{
    type:String,
  },
  descThree:{
    type:String,
  },
});

module.exports = mongoose.model('Product', productSchema);