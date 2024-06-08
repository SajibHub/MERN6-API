import express from "express";
const Router = express.Router();

import { Create, Read } from "../controller/controller.js";

Router.post("/create", Create);
Router.get("/read", Read);

export default Router;
