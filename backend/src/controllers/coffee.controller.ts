import { Request, Response, NextFunction } from "express";
import * as svc from "../services/coffee.service.js";

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await svc.getAllCoffees();
    res.json(items);
  } catch (e) {
    next(e);
  }
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const coffee = await svc.getCoffee(id);

    if (!coffee)
      return res.status(404).json({ error: "Coffee not found" });

    res.json(coffee);
  } catch (e) {
    next(e);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description, basePrice } = req.body;

    if (!name || basePrice == null)
      return res.status(400).json({ error: "name and basePrice required" });

    const created = await svc.createCoffee({
      name,
      description,
      basePrice: Number(basePrice),
    });

    res.status(201).json(created);
  } catch (e) {
    next(e);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const updated = await svc.updateCoffee(id, req.body);
    res.json(updated);
  } catch (e) {
    next(e);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    await svc.deleteCoffee(id);
    res.status(204).send();
  } catch (e) {
    next(e);
  }
};
