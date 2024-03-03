import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import cartRouter from "./routes/cart";
import  connectDB  from "./db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:5173", // allow to server to accept request from FrontEnd
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cartRouter);

connectDB();

app.listen(4000, () => {
  console.log(`Server is running on port http://localhost:4000`);
});
