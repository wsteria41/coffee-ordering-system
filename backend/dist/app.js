import express from "express";
import pool from "./database/pool";
const app = express();
app.use(express.json());
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});
app.get("/db-check", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({
            connected: true,
            time: result.rows[0],
        });
    }
    catch (err) {
        res.status(500).json({ connected: false, error: err });
    }
});
export default app;
