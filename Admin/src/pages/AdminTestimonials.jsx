import { useEffect, useState } from "react";

const API = "http://localhost:5000/api/testimonials";

export default function AdminTestimonials() {
    const [data, setData] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        name: "",
        role: "",
        message: "",
        image: "",
        rating: 5
    });

    // 📥 Fetch data
    const fetchData = async () => {
        const res = await fetch(API);
        const result = await res.json();
        setData(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // 📝 Handle input
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // ➕ Add / ✏️ Update
    const handleSubmit = async () => {
        if (editingId) {
            await fetch(`${API}/${editingId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
        } else {
            await fetch(API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
        }

        // reset
        setForm({
            name: "",
            role: "",
            message: "",
            image: "",
            rating: 5
        });
        setEditingId(null);
        fetchData();
    };

    // ❌ Delete
    const handleDelete = async (id) => {
        await fetch(`${API}/${id}`, {
            method: "DELETE",
        });
        fetchData();
    };

    // ✏️ Edit
    const handleEdit = (item) => {
        setForm({
            name: item.name,
            role: item.role,
            message: item.message,
            image: item.image,
            rating: item.rating
        });
        setEditingId(item._id);
    };

    return (
        <div className="p-8 max-w-4xl mx-auto">

            {/* 🔥 FORM */}
            <h2 className="text-2xl font-bold mb-5">
                {editingId ? "Update Testimonial" : "Add Testimonial"}
            </h2>

            <div className="grid gap-3 mb-6">
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border p-2 rounded"
                />

                <input
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="Role"
                    className="border p-2 rounded"
                />

                <input
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="border p-2 rounded"
                />

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="border p-2 rounded"
                />

                <input
                    type="number"
                    name="rating"
                    value={form.rating}
                    onChange={handleChange}
                    min="1"
                    max="5"
                    className="border p-2 rounded"
                />

                <div className="flex gap-3">
                    <button
                        onClick={handleSubmit}
                        className="bg-[#FB5E01] text-white px-5 py-2 rounded"
                    >
                        {editingId ? "Update" : "Add"}
                    </button>

                    {editingId && (
                        <button
                            onClick={() => {
                                setEditingId(null);
                                setForm({
                                    name: "",
                                    role: "",
                                    message: "",
                                    image: "",
                                    rating: 5
                                });
                            }}
                            className="bg-gray-400 text-white px-5 py-2 rounded"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </div>

            {/* 📋 LIST */}
            <h2 className="text-xl font-semibold mb-4">All Testimonials</h2>

            <div className="space-y-4">
                {data.map((item) => (
                    <div
                        key={item._id}
                        className="border p-4 rounded flex justify-between items-center"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={item.image}
                                alt=""
                                className="w-12 h-12 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="font-bold">{item.name}</h3>
                                <p className="text-sm text-gray-500">
                                    {item.role}
                                </p>

                                <div className="flex">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <span key={i}>⭐</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => handleEdit(item)}
                                className="bg-blue-500 text-white px-3 py-1 rounded"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => handleDelete(item._id)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}