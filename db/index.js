const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB);
  console.log(`MongoDB Connected`);
};

module.exports = { connectDB };
