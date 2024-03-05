import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import cartRouter from "./routes/cart.js";
import connectDB from "./db.js";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser())
app.use(bodyParser.json());
app.use(morgan("dev"));


app.use(cartRouter);

connectDB();

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})