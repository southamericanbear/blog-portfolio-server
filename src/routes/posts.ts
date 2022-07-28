import { Router } from "express";
import { check } from "express-validator";
import { createPost, getPosts, getPostsByTag } from "../controllers/posts";
import { validationFields } from "../middlewares/validationFields";
import { validationJWT } from "../middlewares/validationJWT";

const router = Router();

router.get("/", [validationJWT], getPosts);

router.get("/:tag", [validationJWT], getPostsByTag);

router.post(
  "/",
  [
    validationJWT,
    check("title", "Title is required").not().isEmpty(),
    check("post", "Post is required").not().isEmpty(),
    check("author", "Author is required").not().isEmpty(),
    check("tags", "Tags is required").not().isEmpty(),
    check("tags", "Tags must be an array").isArray(),
    validationFields,
  ],
  createPost
);

export default router;
