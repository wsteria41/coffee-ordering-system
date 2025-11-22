import { Router } from "express";
import * as controller from "../controllers/coffee.controller";

const router = Router();

router.get("/", controller.getCoffees);
router.get("/:id", controller.getCoffee);
router.post("/", controller.createCoffee);
router.put("/:id", controller.updateCoffee);
router.delete("/:id", controller.deleteCoffee);

export default router;
