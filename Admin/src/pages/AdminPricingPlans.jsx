import { useEffect, useState } from "react";
import axios from "axios";

const AdminPlans = () => {
    const [plans, setPlans] = useState([]);
    const [editId, setEditId] = useState(null);
    const [form, setForm] = useState({
        name: "",
        price: "",
        img: "",
        description: "",
        features: [{ label: "", available: true }]
    });

    const API = "http://localhost:5000/api/pricingplans";

    // Fetch plans
    const fetchPlans = async () => {
        try {
            const { data } = await axios.get(API);
            setPlans(data);
        } catch (err) {
            console.log("Fetch Error:", err);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchPlans();
    }, []);

    // Handle form input
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Feature Change
    const handleFeatureChange = (index, key, value) => {
        const updated = [...form.features];
        updated[index][key] = value;

        setForm({ ...form, features: updated });
    };

    // Add Feature
    const addFeature = () => {
        setForm({
            ...form,
            features: [...form.features, { label: "", available: true }]
        });
    };

    // Remove feature
    const removeFeature = (index) => {
        const updated = form.features.filter((_, i) => i !== index);
        setForm({ ...form, features: updated });
    };

    // 💾 Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const cleanedFeatures = form.features.filter((f) => f.label.trim());

        const payload = { ...form, features: cleanedFeatures };

        if (!payload.name || !payload.price) {
            return alert("Name & Price required");
        }

        try {
            if (editId) {
                await axios.put(`${API}/${editId}`, payload);
            } else {
                await axios.post(API, payload);
            }

            fetchPlans();
            resetForm();
        } catch (err) {
            console.log("Submit Error:", err);
        }
    };

    // Reset Form
    const resetForm = () => {
        setForm({
            name: "",
            price: "",
            img: "",
            description: "",
            features: [{ label: "", available: true }]
        });
        setEditId(null);
    };

    // Edit
    const handleEdit = (plan) => {
        setForm({
            name: plan.name || "",
            price: plan.price || "",
            img: plan.img || "",
            description: plan.description || "",
            features:
                plan.features?.length > 0
                    ? plan.features
                    : [{ label: "", available: true }]
        });

        setEditId(plan._id);
    };

    // Delete
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/pricingplans/${id}`);
        fetchPlans();
    };

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-black mb-6">
                Admin Pricing Panel
            </h1>

            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow mb-10"
            >
                <div className="grid grid-cols-2 gap-4">
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Plan Name"
                        className="border p-2 text-black"
                    />

                    <input
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="border p-2 text-black"
                    />

                    <input
                        name="img"
                        value={form.img}
                        onChange={handleChange}
                        placeholder="Image URL"
                        className="border p-2 text-black"
                    />

                    <input
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="border p-2 text-black"
                    />
                </div>

                {/* FEATURES */}
                <div className="mt-4">
                    <h2 className="font-semibold mb-2 text-black">
                        Features
                    </h2>

                    {form.features.map((f, i) => (
                        <div key={i} className="flex gap-2 mb-2">
                            <input
                                value={f.label}
                                onChange={(e) =>
                                    handleFeatureChange(
                                        i,
                                        "label",
                                        e.target.value
                                    )
                                }
                                placeholder="Feature"
                                className="border p-2 flex-1 text-black"
                            />

                            <select
                                value={f.available}
                                onChange={(e) =>
                                    handleFeatureChange(
                                        i,
                                        "available",
                                        e.target.value === "true"
                                    )
                                }
                                className="border p-2 text-black"
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>

                            <button
                                type="button"
                                onClick={() => removeFeature(i)}
                                className="bg-red-500 text-black px-3"
                            >
                                X
                            </button>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addFeature}
                        className="bg-blue-500 text-black px-4 py-1 mt-2"
                    >
                        + Add Feature
                    </button>
                </div>

                <button className="mt-5 bg-green-600 text-black px-6 py-2 rounded">
                    {editId ? "Update Plan" : "Add Plan"}
                </button>
            </form>

            {/* PLAN LIST */}
            <div className="grid grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <div
                        key={plan._id}
                        className="bg-black text-white p-5 shadow rounded"
                    >
                        {plan.img && (
                            <img
                                src={plan.img}
                                className="w-12 mb-2"
                                alt="plan"
                            />
                        )}

                        <h2 className="font-bold">{plan.name}</h2>
                        <p>${plan.price}</p>

                        <ul className="text-sm mt-2">
                            {plan.features?.map((f, i) => (
                                <li key={i}>
                                    {f.label}{" "}
                                    {f.available ? "✅" : "❌"}
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-2 mt-4">
                            <button
                                onClick={() => handleEdit(plan)}
                                className="bg-yellow-400 text-black px-3 py-1"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => handleDelete(plan._id)}
                                className="bg-red-500 text-black px-3 py-1"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPlans;