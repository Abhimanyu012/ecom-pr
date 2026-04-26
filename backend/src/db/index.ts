import { drizzle } from "drizzle-orm/node-postgres";

import { Pool } from "pg";

import * as schema from "./schema";

import { ENV } from "../config/env";

if (!ENV.DATABASE_URL) {
  throw new Error("Database is not set in environmet variable");
}

const pool = new Pool({ connectionString: ENV.DATABASE_URL });

pool.on("connect", () => {
  console.log("database is connected successfully ");
});
pool.on("error", (error) => {
  console.error("database is not connected successfully ");
});

export const db = drizzle({client:pool,schema})

