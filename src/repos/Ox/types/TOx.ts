import { Ox } from "@prisma/client";

export type TOx = Omit<
  Ox,
  "active" | "created_at" | "updated_at" | "deleted_at"
>;
