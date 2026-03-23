import Blog from "../models/Blog.js";

// GET All
export const getBlogs = async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
};

// CREATE blog
export const createBlog = async (req, res) => {
    const blog = new Blog(req.body);
    const saved = await blog.save();
    res.json(saved);
};

// UPDATE blog
export const updateBlog = async (req, res) => {
    try {
        const updated = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnDocument: 'after',
                runValidators: true, // ✅ important
            }
        );

        if (!updated) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json(updated);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE blog
export const deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
};