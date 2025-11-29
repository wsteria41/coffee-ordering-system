import { Request, Response, NextFunction } from "express";
import * as svc from "../services/extra.service.js";

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try { res.json(await svc.getAllExtras()); } catch (e) { next(e); }
};
export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ex = await svc.getExtra(Number(req.params.id));
    if (!ex) return res.status(404).json({ error: "Not found" });
    res.json(ex);
  } catch (e) { next(e); }
};
export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, price } = req.body;
    if (!name || price == null) return res.status(400).json({ error: "name and price required" });
    res.status(201).json(await svc.createExtra({ name, price: Number(price) }));
  } catch (e) { next(e); }
};
export const update = async (req: Request, res: Response, next: NextFunction) => {
  try { res.json(await svc.updateExtra(Number(req.params.id), req.body)); } catch (e) { next(e); }
};
export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try { await svc.deleteExtra(Number(req.params.id)); res.status(204).send(); } catch (e) { next(e); }
};
