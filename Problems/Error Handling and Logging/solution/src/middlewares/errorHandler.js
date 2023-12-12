import { logger } from "./logger.middleware.js";

logger;

export class customErrorHandler extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customErrorHandler) {
    const errorLog = `"timestamp": ${new Date().toString()}, "request URL":${
      req.originalUrl
    }, "error message":${err.message}`;
    logger.error(errorLog);
    res.status(err.code).send(err.message);
  } else {
    const errorLog = `"timestamp": ${new Date().toString()}, "request URL":${
      req.originalUrl
    }, "error message":"Oops! Something went wrong... Please try again later!"`;
    logger.error(errorLog);
    res
      .status(500)
      .send("Oops! Something went wrong... Please try again later!");
  }
};
