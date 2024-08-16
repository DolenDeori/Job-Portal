import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getComapnyById,
  getCompany,
  registerCompany,
  updateCompany,
} from "../controllers/job.controller.js";
const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").post(isAuthenticated, getCompany);
router.route("/get/:id").post(isAuthenticated, getComapnyById);
router.route("/update/:id").post(isAuthenticated, updateCompany);

export default router;
