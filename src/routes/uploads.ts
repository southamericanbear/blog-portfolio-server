import { Router } from "express";
import { getUploadFiles, uploadFile } from "../controllers/uploads";
import { checkFile } from "../middlewares/checkFile";
const router = Router();

router.get("/cloudinary-upload", getUploadFiles);
router.post("/cloudinary-upload", [checkFile], uploadFile);

export default router;
