import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter().mutation("createUser", {
  input: z
    .object({
      name: z.string().nullish(),
      contactInfo: z.string().nullish(),
    })
    .nullish(),
  resolve({ input, ctx }) {
    console.log(input);
    ctx.prisma;
    return {};
  },
});
