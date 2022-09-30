import { createRouter } from "./context";
import { z } from "zod";

export const usersRouter = createRouter().mutation("createUser", {
  input: z.object({
    name: z.string(),
    contactInfo: z.string(),
  }),
  async resolve({ input, ctx }) {
    console.log(input);

    //Persist user info on
    const newUser = await ctx.prisma.speedDateUser.create({
      data: input,
    });

    return newUser;
  },
});
