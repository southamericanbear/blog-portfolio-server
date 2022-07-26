import { login } from "../controllers/auth";
import { validationFields } from "../middlewares/validationFields";

const { Router } = require("express");
const { check } = require("express-validator");

const router = Router();

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").exists(),
    validationFields,
  ],
  login
);

export default router;
