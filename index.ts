import express from "express";
import { routerApiV1 } from "./src/routes/index";

const app = express();
const port = 3000;

app.use(express.json());

routerApiV1(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
