import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
export const pool = new Pool({
    host: process.env.DB_HOST || "db",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "postgres",
    database: process.env.DB_NAME || "coffee",
    port: Number(process.env.DB_PORT) || 5432,
});
pool.on("connect", () => {
    console.log("Connected to PostgreSQL database");
});
pool.on("error", (err) => {
    console.error(" DB Error: ", err);
});
export default pool;
