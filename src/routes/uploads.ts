import { Router } from "express";
import { getUploadFiles, uploadFile } from "../controllers/uploads";
import { checkFile } from "../middlewares/checkFile";
import { validationJWT } from "../middlewares/validationJWT";
const router = Router();

router.get("/cloudinary-upload", [validationJWT], getUploadFiles);
router.post("/cloudinary-upload", [validationJWT, checkFile], uploadFile);

export default router;
