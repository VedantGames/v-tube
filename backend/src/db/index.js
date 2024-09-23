const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('Connecting to MongoDB...');
  try {
    const connectionInstance = await mongoose.connect('mongodb+srv://guptavedant2549:vedant2549@cluster0.kqw5bfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('MongoDB connected successfully !! DB Host ' + connectionInstance.connection.host)
  } catch (err) {
    console.log('MongoDB connection failed ' + err);
    process.exit(1);
  }
}

module.exports = connectDB;
