import { useEffect, useState } from "react";
import axios from "axios";

const AdminFaq = () => {
    const [faqs, setFaqs] = useState([]);
    const [form, setForm] = useState({ question: "", answer: "" });
    const [editId, setEditId] = useState(null);

    // 📥 GET FAQs
    const fetchFAQs = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/faqs");
            setFaqs(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchFAQs();
    }, []);

    // ➕ ADD / ✏️ UPDATE
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editId) {
                await axios.put(
                    `http://localhost:5000/api/faqs/${editId}`,
                    form
                );
            } else {
                await axios.post(
                    "http://localhost:5000/api/faqs",
                    form
                );
            }

            
            setEditId(null);
            fetchFAQs();

        } catch (err) {
            console.log(err);
        }
    };

    // ✏️ EDIT
    const handleEdit = (faq) => {
        setForm({
            question: faq.question,
            answer: faq.answer
        });
        setEditId(faq._id);
    };

    // ❌ DELETE
    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `http://localhost:5000/api/faqs/${id}`
            );
            fetchFAQs();
        } catch (err) {
            console.log(err);
        }
    };

    // Input Handler
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6">
                Admin FAQ Panel
            </h2>

            {/* 📝 FORM */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">

                <input
                    type="text"
                    placeholder="Enter Question"
                    className="w-full border p-3 rounded"
                    name="question"
                    value={form.question}
                    onChange={handleChange}
                />

                <textarea
                    placeholder="Enter Answer"
                    className="w-full border p-3 rounded"
                    name="answer"
                    value={form.answer}
                    onChange={handleChange}
                />

                <button className="bg-orange-500 text-white px-6 py-2 rounded">
                    {editId ? "Update FAQ" : "Add FAQ"}
                </button>
            </form>

            {/* 📋 LIST */}
            <div className="space-y-4">
                {faqs.map((faq) => (
                    <div
                        key={faq._id}
                        className="bg-white shadow p-4 rounded"
                    >
                        <h3 className="font-semibold text-black text-lg">
                            {faq.question}
                        </h3>

                        <p className="text-gray-600 mt-2">
                            {faq.answer}
                        </p>

                        <div className="mt-3 space-x-4">
                            <button
                                onClick={() => handleEdit(faq)}
                                className="text-blue-500"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => handleDelete(faq._id)}
                                className="text-red-500"
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

export default AdminFaq;