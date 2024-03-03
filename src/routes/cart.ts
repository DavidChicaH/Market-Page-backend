import { Router } from "express";

const cartRouter = Router();

cartRouter.get("/cart") // get all cart items
cartRouter.post("/cart") // add item to cart
cartRouter.put("/cart/:id") // update item in cart
cartRouter.delete("/cart/:id") // delete item from cart
cartRouter.delete("/cart") // delete all items from cart

//router.put("/users/:id", (req, res) => res.send("users"));
//router.delete("/users/:id", (req, res) => res.send("users"));

export default cartRouter;
