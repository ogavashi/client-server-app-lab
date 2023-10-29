const os = require("os");

export const getTime = () => {
  const ts = Date.now();

  const date_ob = new Date(ts);
  const date = date_ob.getDate();
  const month = date_ob.getMonth() + 1;
  const year = date_ob.getFullYear();
  const hour = date_ob.getHours();
  const minutes = date_ob.getMinutes();

  // date & time in YYYY-MM-DD format
  return `${year}-${month}-${date} || ${hour}-${minutes}`;
};

export const getId = () => {
  return process.pid;
};

export const getHostName = () => {
  return os.hostname();
};

export const getPlatform = () => {
  return process.platform;
};

export const getProcessor = () => {
  return os.cpus()[0].model.trim();
};

export const getMemory = () => {
  return `${os.totalmem()} bytes`;
};

export const getUptime = () => {
  //   throw new Error("Oh, error occurred");

  return `${os.uptime() / 3600} hours`;
};
