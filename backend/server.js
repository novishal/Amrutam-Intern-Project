import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import questionRoutes from "./routes/questionRoutes.js";

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/questions",questionRoutes);

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(" MongoDB Connection Error", err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// UserName-:AmrutumInternship
// Password-:S8ZR60QOTEgGqoyo