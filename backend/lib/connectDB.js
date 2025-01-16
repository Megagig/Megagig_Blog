// import mongoose from 'mongoose';

// // Function to connect to MongoDB
// const connectDB = async (url) => {
//   try {
//     await mongoose.connect(url, {});
//     console.log('Connected to MongoDB successfully');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1); // Terminate the app if the connection fails
//   }
// };

// export default connectDB;

import mongoose from 'mongoose';

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      serverSelectionTimeoutMS: 5000, // Timeout if unable to connect
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
