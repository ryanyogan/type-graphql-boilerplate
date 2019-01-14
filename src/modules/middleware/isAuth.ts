import { MiddlewareFn } from "type-graphql";

import { Context } from "../../typings/Context";

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  if (!context.req.session!.userId) {
    throw new Error("not authorized");
  }

  return next();
};
