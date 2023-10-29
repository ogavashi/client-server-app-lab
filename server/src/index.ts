import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { detailedLogger } from "./middleware/detailedLogger";
import { api } from "./api";

const app = new Hono();

app.use("*", prettyJSON());
app.use("*", detailedLogger);
app.use("*", cors());

//Routes
app.route("/", api);

app.onError((err, c) => {
  return c.text(`An error occured! ${err}`, 500);
});

serve({
  fetch: app.fetch,
  port: 8000,
});
