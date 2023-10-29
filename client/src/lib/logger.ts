export const logger = (route: string, status?: number, error?: string) => {
  console.log("Requested route: ", `/${route}`);
  status && console.log("Status: ", status);
  error && console.log("Error: ", error);
};
