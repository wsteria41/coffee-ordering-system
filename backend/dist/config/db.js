import { Pool } from "pg";
import { env } from "./env";
const pool = new Pool({
    host: env.db.host,
    port: env.db.port,
    user: env.db.user,
    password: env.db.password,
    database: env.db.database,
});
pool.connect()
    .then(() => console.log(" ❤️PostgreSQL connected successfully"))
    .catch((err) => console.error(" 🥹DB Connection Error:", err));
export default pool;
