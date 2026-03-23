import { useEffect, useState } from "react";

export default function AdminBlog() {
    const [blogs, setBlogs] = useState([]);
    const [form, setForm] = useState({
        image: "",
        tag: "",
        date: "",
        comment: "",
        title: "",
        desc: "",
    });
    const [editId, setEditId] = useState(null);

    // GET
    const fetchBlogs = () => {
        fetch("http://localhost:5000/api/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data));
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // CREATE
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editId) {
            // ✅ UPDATE
            await fetch(`http://localhost:5000/api/blogs/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
        } else {
            // ✅ CREATE
            await fetch("http://localhost:5000/api/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
        }

        // ✅ reset form
        setForm({
            image: "",
            tag: "",
            date: "",
            comment: "",
            title: "",
            desc: "",
        });

        setEditId(null); // reset edit mode
        fetchBlogs();
    };

    // UPDATE
    const handleEdit = (blog) => {
        setForm(blog);        // fill form with data
        setEditId(blog._id); // store id
    };

    // DELETE
    const handleDelete = async (id) => {
        await fetch(`http://localhost:5000/api/blogs/${id}`, {
            method: "DELETE",
        });
        fetchBlogs();
    };

    return (
        <div className="p-6">

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-2 mb-6">
                <input placeholder="Image URL" onChange={e => setForm({ ...form, image: e.target.value })} />
                <input placeholder="Tag" onChange={e => setForm({ ...form, tag: e.target.value })} />
                <input placeholder="Date" onChange={e => setForm({ ...form, date: e.target.value })} />
                <input placeholder="Comment" onChange={e => setForm({ ...form, comment: e.target.value })} />
                <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
                <textarea placeholder="Description" onChange={e => setForm({ ...form, desc: e.target.value })} />

                <button className="bg-blue-500 text-white px-4 py-2">Add Blog</button>
            </form>

            {/* LIST */}
            {blogs.map((blog) => (
                <div key={blog._id} className="border p-3 mb-3 flex gap-4 items-center">

                    {/* IMAGE PREVIEW */}
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-150 h-80 object-cover rounded"
                        onError={(e) => e.target.src = "https://via.placeholder.com/100"}
                    />

                    {/* TEXT */}
                    <div className="flex-1">
                        <h3 className="font-bold">{blog.title}</h3>
                        <p className="text-sm text-gray-500">{blog.tag}</p>
                    </div>

                    {/* DELETE */}
                    <button
                        onClick={() => handleDelete(blog._id)}
                        className="bg-red-500 text-white px-3 py-1"
                    >
                        Delete
                    </button>

                    <button
                        onClick={() => handleEdit(blog)}
                        className="bg-yellow-500 text-white px-3 py-1 mr-2"
                    >
                        Edit
                    </button>

                </div>
            ))}

        </div>
    );
}