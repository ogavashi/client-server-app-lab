import { logger } from "../lib/logger";

export const request = async (url: string) => {
  let status;
  let errorM;

  try {
    const result = await fetch(`http://localhost:8000/${url}`);

    const data = await result.json();

    status = result.status;

    return JSON.stringify(data);
  } catch (error) {
    if (error instanceof Error) {
      errorM = error.message;
      console.warn(error);
      throw new Error(error.message);
    }
  } finally {
    logger(url, status, errorM);
  }
};
