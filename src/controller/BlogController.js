export default class BlogController {
  static createBlog = async (req, res) => {
    return res.status(201).json({ message: "Blog created successfully" });
  };
  static readBlog = async (req, res) => {
    return res.status(200).json({ message: "Blog read successfully" });
  };
  static updateBlog = async (req, res) => {
    return res.status(200).json({ message: "Blog update  successfully" });
  };
  static deleteBlog = async (req, res) => {
    return res.status(200).json({ message: "Blog delete successfully" });
  };
}
