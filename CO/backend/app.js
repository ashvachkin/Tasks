import express from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;
import cors from "cors";
import apiRoutes from "../backend/modules/routes/routes.js";
const PORT = process.env.PORT || 8000;
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
const todoList = new Schema({
  label: String,
  status: Boolean,
  date: Number,
});
const Item = mongoose.model("Item", todoList);
const start = async () => {
  console.log("yeees");
  try {
    await mongoose.connect(
      "mongodb+srv://Shvachkin:123@todo.3vqtshu.mongodb.net/test"
    );
    app.listen(PORT, () => {});
  } catch (e) {
    console.log(e);
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", apiRoutes);
start();

export default Item;
