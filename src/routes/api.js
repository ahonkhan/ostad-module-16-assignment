import { Router } from "express";
import BlogController from "../controller/BlogController";
const router = Router();

router.post("/create-blog", BlogController.createBlog);
router.get("/read-blog", BlogController.readBlog);
router.put("/update-blog", BlogController.updateBlog);
router.delete("/read-blog", BlogController.deleteBlog);
export default router;
