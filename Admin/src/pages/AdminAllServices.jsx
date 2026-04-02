import { useEffect, useState } from "react";

const AdminAllServices = () => {
    const [allServices, setAllServices] = useState([]);
    const [form, setForm] = useState({
        title: "",
        desc: "",
        image: ""
    });
    const [editId, setEditId] = useState(null);

    // 🔹 Fetch all services
    const fetchServices = async () => {
        const res = await fetch("http://localhost:5000/api/allservices");
        const data = await res.json();
        setAllServices(data);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchServices();
    }, []);

    // 🔹 Handle input change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 🔹 Submit (Add / Update)
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editId) {
            // UPDATE
            await fetch(`http://localhost:5000/api/allservices/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
        } else {
            // CREATE
            await fetch("http://localhost:5000/api/allservices", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
        }

        // Reset form
        setForm({ title: "", desc: "", image: "" });
        setEditId(null);
        fetchServices();
    };

    // 🔹 Delete
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await fetch(`http://localhost:5000/api/allservices/${id}`, {
                method: "DELETE",
            });
            fetchServices();
        }
    };

    // 🔹 Edit
    const handleEdit = (item) => {
        setForm({
            title: item.title,
            desc: item.desc,
            image: item.image
        });
        setEditId(item._id);
    };

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">

            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-medium text-gray-900">Services</h1>
                <p className="text-sm text-black mt-1">Manage your service listings</p>
            </div>

            {/* Form Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
                <div className="flex items-center gap-2 mb-5">
                    <h2 className="text-sm font-medium text-gray-800">
                        {editId ? "Edit service" : "Add new service"}
                    </h2>
                    <span className="text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200 px-2.5 py-0.5 rounded-md">
                        {editId ? "Editing" : "New"}
                    </span>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-gray-500">Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="e.g. Web Design"
                                value={form.title}
                                onChange={handleChange}
                                required
                                className="px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-gray-500">Image URL</label>
                            <input
                                type="text"
                                name="image"
                                placeholder="https://..."
                                value={form.image}
                                onChange={handleChange}
                                required
                                className="px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-gray-500">desc</label>
                            <input
                                type="text"
                                name="desc"
                                placeholder="Brief desc..."
                                value={form.desc}
                                onChange={handleChange}
                                required
                                className="px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition"
                            />
                        </div>

                    </div>

                    <div className="flex gap-2 mt-5">
                        <button
                            type="submit"
                            className="px-5 py-2 text-sm font-medium bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 transition"
                        >
                            {editId ? "Update service" : "Add service"}
                        </button>

                        {editId && (
                            <button
                                type="button"
                                onClick={() => {
                                    setForm({ title: "", image: "", desc: "" });
                                    setEditId(null);
                                }}
                                className="px-5 py-2 text-sm font-medium text-gray-400 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* Section Label */}
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                All services ({allServices.length})
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allServices.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition shadow-sm"
                    >
                        {/* Image */}
                        {item.image ? (
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-36 object-cover"
                            />
                        ) : (
                            <div className="w-full h-36 bg-gray-100 flex items-center justify-center text-3xl opacity-25">
                                🖼
                            </div>
                        )}

                        {/* Body */}
                        <div className="px-4 py-3">
                            <p className="text-sm font-medium text-gray-900 mb-1">{item.title}</p>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between px-4 py-2.5 border-t border-gray-100">
                            <span className="text-xs text-gray-300 font-mono">
                                #{item._id?.slice(-6)}
                            </span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(item)}
                                    className="text-xs font-medium px-3 py-1.5 bg-amber-50 text-amber-600 border border-amber-200 rounded-md hover:bg-amber-100 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="text-xs font-medium px-3 py-1.5 bg-red-50 text-red-500 border border-red-200 rounded-md hover:bg-red-100 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default AdminAllServices;