import express, { NextFunction, Request, response, Response } from "express";

const exercise7 = express.Router();

exercise7.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("Hello");
  }
);

exercise7.get(
  "/status",
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({
      damaged_system: "deflector_shield",
    });
  }
);

exercise7.get(
  "/repair-bay",
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Repair</title>
      </head>
      <body>
      <div class="anchor-point">SHLD-05</div>
      </body>
      </html>
    `);
  }
);

exercise7.get(
  "/teapot",
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(418).send();
  }
);

export default exercise7;