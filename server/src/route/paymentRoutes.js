import express from "express";
import { Payment } from "../controllers/paymentcontrollers.js";

const router = express.Router();
router.route("/donate").post(Payment);

export default router;