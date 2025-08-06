import { sendReservation } from "../controllers/reservationController.js";
import express from "express";

const router = express.Router();

router.post("/sendreservation", sendReservation);

export default router;
