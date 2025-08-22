import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import summerCollection from "./data/summerCollection.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.error(err));

const importData = async () => {
  try {
    await Product.deleteMany(); // clear old products
    await Product.insertMany(summerCollection); // insert summer collection
    console.log("✅ Summer Collection Imported!");
    process.exit();
  } catch (error) {
    console.error("❌ Import error", error);
    process.exit(1);
  }
};

importData();
