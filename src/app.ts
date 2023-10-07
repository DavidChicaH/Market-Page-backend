import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import router from "./routes/app";



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression())
app.use(cookieParser());
app.use(bodyParser.json());

app.use(router);

app.listen(4000, () => {
  console.log(`Server is running on port http://localhost:4000`);
});
 
