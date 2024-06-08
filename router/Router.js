import express from "express";
const Router = express.Router();

import { Create, Read, Update } from "../controller/controller.js";

Router.post("/create", Create);
Router.get("/read", Read);
Router.put("/update/:id", Update);

export default Router;
