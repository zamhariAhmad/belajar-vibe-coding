import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "",
    database: "acoba",
  },
});
