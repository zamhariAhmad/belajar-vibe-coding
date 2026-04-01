import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
import { db } from "./db";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";

const app = new Elysia({ adapter: node() })
  .get("/", () => "Hello World from Elysia + Drizzle!")
  .get("/test-db", async () => {
    try {
      const result = await db.select().from(users).limit(1);
      return { success: true, count: result.length, data: result };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  })
  .listen(process.env.PORT || 3000);

console.log(`Server is running at ${app.server?.hostname}:${app.server?.port}`);
