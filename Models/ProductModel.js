import mongoose from "mongoose";


const productSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    imagerep: {
      type: String,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Report", productSchema);

export default Product;
