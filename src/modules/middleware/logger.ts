import { MiddlewareFn } from "type-graphql";
import { Context } from "../../typings/Context";

export const logger: MiddlewareFn<Context> = async ({ args }, next) => {
  console.log("Arguments Passed: ", args);

  return next();
};
