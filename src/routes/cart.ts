import { Router } from "express";
import { addToCart, delQuantity, getCart, deleteCart } from "../controllers/cartControllers.js";

const cartRouter = Router();
// @ts-ignore
cartRouter.get("/cart", getCart)
// @ts-ignore
cartRouter.post("/cart", addToCart);
// @ts-ignore
cartRouter.put("/cart/:id", delQuantity);
// @ts-ignore
cartRouter.delete("/cart/:id", deleteCart);


export default cartRouter;