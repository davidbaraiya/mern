require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./router/authRouter");
const contactRouter = require("./router/contactRouter");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/errorMiddleware");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api", contactRouter);
app.use(errorMiddleware);

const PORT = 8000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server runing at ${PORT}`);
  });
});
