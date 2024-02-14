require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());

app.use("/api/auth", router);
app.use(errorMiddleware);

const PORT = 8000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server runing at ${PORT}`);
  });
});
