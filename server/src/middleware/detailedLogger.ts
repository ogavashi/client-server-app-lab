import { Context, Env, Next } from "hono";

export const detailedLogger = async (context: Context<Env, "*", {}>, next: Next) => {
  const { path: requestedPath } = context.req;
  const start = Date.now();

  const requestTime = new Date(start);

  console.log("Client requested route: ", requestedPath);
  console.log(
    "Request time: ",
    requestTime.getHours() +
      ":" +
      requestTime.getMinutes() +
      ":" +
      requestTime.getSeconds() +
      ":" +
      requestTime.getMilliseconds()
  );
  console.log("-------------");

  await next();

  const end = Date.now();
  const { status } = context.res;

  console.log("Resposne status: ", status);
  console.log("Resposne time: ", `${end - start}ms`);
};
