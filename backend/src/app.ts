import express from "express";
import cors from "cors";
import coffeeRoutes from "./routes/coffee.routes.js";
import extraRoutes from "./routes/extra.routes.js";
import orderRoutes from "./routes/order.routes.js";
import { errorHandler } from "./utils/errorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/coffee", coffeeRoutes);
app.use("/api/extras", extraRoutes);
app.use("/api/orders", orderRoutes);

// last
app.use(errorHandler);

export default app;
