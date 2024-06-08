import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";

import Connect from "./config/MongoDB.js";
import Router from "./router/Router.js";

dotenv.config();
const app = express();
app.use(cors())
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.use("/api/product", Router);

app.listen(PORT, () => {
  Connect();
  console.log(`Listen Port ${PORT}`);
});
