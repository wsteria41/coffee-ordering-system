import { Request, Response } from "express";
import * as orderService from "../services/order.service.js";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId ?? null;
    const items = req.body.items;
    const result = await orderService.createOrder(userId, items);
    res.status(201).json({ success: true, data: result });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};
