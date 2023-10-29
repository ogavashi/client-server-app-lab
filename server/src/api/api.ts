import { Hono } from "hono";
import { Bindings } from "hono/dist/types/types";
import * as model from "../model";

export const api = new Hono<{ Bindings: Bindings }>();

api.get("/", (c) => {
  return c.json({ message: "Hello" });
});

api.get("/dateAndTime", (c) => {
  const time = model.getTime();

  return c.json({ result: time });
});

api.get("/processId", (c) => {
  const result = model.getId();

  return c.json({ result });
});

api.get("/hostName", (c) => {
  const result = model.getHostName();

  return c.json({ result });
});

// Отримання платформи сервера
api.get("/hostPlatform", (c) => {
  const result = model.getPlatform();

  return c.json({ result });
});

// Отримання процесору сервера
api.get("/hostProcessor", (c) => {
  const result = model.getProcessor();

  return c.json({ result });
});

// Отримання пам'яті сервера
api.get("/hostMemory", (c) => {
  const result = model.getMemory();

  return c.json({ result });
});

// Отримання часу роботи сервера
api.get("/hostUptime", (c) => {
  const result = model.getUptime();

  return c.json({ result });
});
