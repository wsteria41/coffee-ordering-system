import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));

// sample route
app.get("/menu", (req, res) => {
  res.json([{ id: 1, name: "Americano", price: 2.5 }]);
});

const port = process.env.PORT || 4000;
export default app;
