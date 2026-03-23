import { useEffect, useState } from "react";

const API = "http://localhost:5000/api/process";

export default function AdminPanel() {
    const [data, setData] = useState([]);
    const [heading, setHeading] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [editId, setEditId] = useState(null);

    // ✅ Load Data
    const fetchData = async () => {
        const res = await fetch(API);
        const result = await res.json();
        setData(result);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchData(); // ✅ correct
    }, []);

    // ✅ Add / Update
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newData = { heading, desc, image };

        if (editId) {
            await fetch(`${API}/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData)
            });
        } else {
            await fetch(API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData)
            });
        }

        // reset form
        setHeading("");
        setDesc("");
        setImage("");
        setEditId(null);

        fetchData(); // ✅ refresh UI
    };

    // ✅ Delete
    const handleDelete = async (id) => {
        await fetch(`${API}/${id}`, { method: "DELETE" });
        fetchData(); // simple & reliable
    };

    // ✅ Edit
    const handleEdit = (item) => {
        setHeading(item.heading);
        setDesc(item.desc);
        setImage(item.image);
        setEditId(item._id);
    };

    return (
        <div className="p-10">
            <h1 className="text-2xl mb-5">Simple Admin Panel</h1>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-3 mb-6">
                <input
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    placeholder="Heading"
                    className="border p-2 w-full"
                />

                <input
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Description"
                    className="border p-2 w-full"
                />

                <input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                    className="border p-2 w-full"
                />

                <button className="bg-blue-500 text-white px-4 py-2">
                    {editId ? "Update" : "Add"}
                </button>
            </form>

            {/* DATA */}
            <div className="grid grid-cols-3 gap-5">
                {data.map((item) => (
                    <div key={item._id} className="border p-4">
                        <img src={item.image} className="h-32 w-full object-cover" />
                        <h2>{item.heading}</h2>
                        <p>{item.desc}</p>

                        <div className="flex gap-2 mt-2">
                            <button
                                onClick={() => handleEdit(item)}
                                className="bg-yellow-500 px-2 py-1 text-white"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => handleDelete(item._id)}
                                className="bg-red-500 px-2 py-1 text-white"
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