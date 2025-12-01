import express from "express";
import cors from "cors";
import coffeeRoutes from "./routes/coffee.routes.js";
import { errorHandler } from "./utils/errorHandler.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/coffee", coffeeRoutes);


app.use(errorHandler);
export default app;
