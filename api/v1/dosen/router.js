import { tampilDosen } from "./controller.js";
import express from "express";

const router = express.Router();

router.get("/", tampilDosen);

export default router;