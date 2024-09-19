import { config } from "dotenv";
import { expand } from "dotenv-expand";
import * as z from "zod";
import { ZodError } from "zod";

const EnvSchema = z.object({
  DB_MIGRATING: z.string(),
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_PORT: z.string(),
  KIT_DB_URI: z.string(),
});

export type TEnv = z.infer<typeof EnvSchema>;

expand(config({ path: ".env.local" }));

try {
  EnvSchema.parse(process.env);
} catch (error) {
  if (error instanceof ZodError) {
    let message = "Missing required values in .env:\n";
    error.issues.forEach((issue) => {
      message += issue.path[0] + "\n";
    });
    const e = new Error(message);
    e.stack = "";
    throw e;
  } else {
    console.error(error);
  }
}

export default EnvSchema.parse(process.env);
