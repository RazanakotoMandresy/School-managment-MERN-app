require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./database/connect");
const studentsRoutes = require("./routes/studentsRoutes");
const classRoutes = require("./routes/classRoutes");
const cors = require("cors");
const app = express();  
const port = 3000;
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use("/auth", authRoutes);
app.use("/students", studentsRoutes);
app.use("/", classRoutes);
const start = async () => {
  try {
    await connectDB(process.env.DB);
    app.listen(port, () => {
      console.log(`connected on the port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
