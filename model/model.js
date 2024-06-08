import mongoose from "mongoose";

const createSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const createModel = mongoose.model("Product", createSchema);

export default createModel;
