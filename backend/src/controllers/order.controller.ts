import { Request, Response, NextFunction } from "express";
import * as svc from "../services/order.service.js";

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.body.userId ?? null;
    const items = req.body.items;
    if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ error: "items required" });

    const result = await svc.createOrder(userId, items);
    res.status(201).json(result);
  } catch (e) { next(e); }
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ord = await svc.getOrder(Number(req.params.id));
    if (!ord) return res.status(404).json({ error: "Not found" });
    res.json(ord);
  } catch (e) { next(e); }
};

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const list = await svc.listOrders();
    res.json(list);
  } catch (e) { next(e); }
};
