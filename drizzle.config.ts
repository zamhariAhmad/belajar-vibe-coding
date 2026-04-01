import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    uri: process.env.DATABASE_URL || "mysql://root@127.0.0.1:3306/acoba",
  },
} satisfies Config;
