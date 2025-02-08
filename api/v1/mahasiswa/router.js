import { tampilMahasiswa } from "./controller.js";
import express from "express";

const router = express.Router();

router.get("/", tampilMahasiswa);

export default router;