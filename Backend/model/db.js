const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb://0.0.0.0:27017/productInternSchema",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;