import { login, revalidationToken } from "../controllers/auth";
import { validationFields } from "../middlewares/validationFields";
import { validationJWT } from "../middlewares/validationJWT";

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

router.post("/renew", [validationJWT], revalidationToken);

export default router;
