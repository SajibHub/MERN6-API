import mongoose from "mongoose";

const Connect = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Connect");
  } catch (error) {
    console.log("Failed to connect");
  }
};

export default Connect;
