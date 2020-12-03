import winston from "winston";

const formatter = (opts) => {
  let metaString = ``;
  if  (opts.meta && Object.keys(opts.meta).length) {
    metaString = `\n\t${JSON.stringify(opts.meta)}`;
  }

  const message = opts.message || ``;
  return `[${opts.level}] ${message}${metaString}`;
};

const logger = new winston.createLogger({
  transports: [new winston.transports.Console({ formatter })],
});

export default logger;
