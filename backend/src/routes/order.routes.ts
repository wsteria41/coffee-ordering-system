import express from "express";
import * as ctrl from "../controllers/order.controller.js";
const router = express.Router();

router.post("/", ctrl.create);
router.get("/", ctrl.list);
router.get("/:id", ctrl.getById);

export default router;
