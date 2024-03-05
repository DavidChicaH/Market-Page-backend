import Cart from "../models/cartModel.js";
import { Request, Response } from "express";

// @ts-ignore
export const getCart = async (req: Request, res: Response) => {
  try {
    const cart = await Cart.find();
    //@ts-ignore
    if (!cart.length) {
      return res.json({ message: "Cart is empty" });
    } else {
      res.json(cart);
    }
  } catch (error) {
    //@ts-ignore
    return res.status(500).json({ message: error.message });
  }
};

export const addToCart = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const { id, title, price, image, quantity } = req.body;

    const newCart = new Cart({ id, title, price, image, quantity });

    const cartItem = await Cart.findOne({ id: id });

    if (cartItem) {
      cartItem.quantity += 1;
      await cartItem.save();
      return res.json(cartItem);
    } else {
      const savedCart = await newCart.save();
      //@ts-ignore
      return res.json(savedCart);
    }
  } catch (error) {
    //@ts-ignore
    return res.status(500).json({ message: error.message });
  }
};

export const delQuantity = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const cartItem = await Cart.findOne({ id: id });

    if (cartItem) {
      if (cartItem.quantity === 1) {
        await cartItem.deleteOne();
        return res.json({ message: "Item removed from cart" });
      }

      cartItem.quantity -= 1;
      await cartItem.save();
      return res.json(cartItem);
    } else {
      return res.status(404).json({ message: "Item not found" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const cartItem = await Cart.findOne({ id: id });

    if (cartItem) {
      await cartItem.deleteOne();
      res.json({ message: "Item removed from cart" });
    }
  } catch (error) {
    //  @ts-ignore
    res.status(500).json({ message: error.message });
  }
};
