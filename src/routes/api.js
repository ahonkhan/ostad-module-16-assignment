import { Router } from "express";
import BlogController from "../controller/BlogController.js";
const router = Router();

router.post("/create-blog", BlogController.createBlog);
router.get("/read-blog", BlogController.readBlog);
router.put("/update-blog", BlogController.updateBlog);
router.delete("/delete-blog", BlogController.deleteBlog);
export default router;
