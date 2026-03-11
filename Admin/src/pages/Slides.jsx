import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

export default function Slides() {

    const [slides, setSlides] = useState([]);

    const [form, setForm] = useState({
        image: "",
        title: "",
        tag: ""
    });

    const fetchSlides = async () => {
        const res = await axios.get(`${API}/sliders`);
        setSlides(res.data);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchSlides();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addSlide = async () => {
        try {

            if (!form.image || !form.title || !form.tag) {
                alert("Please fill all fields");
                return;
            }

            await axios.post(`${API}/sliders`, form);

            fetchSlides();

            setForm({
                image: "",
                title: "",
                tag: ""
            });

        } catch (error) {

            console.error(error);
            alert("Failed to add slide");

        }
    };

    const deleteSlide = async (id) => {
        try {

            await axios.delete(`${API}/sliders/${id}`);

            fetchSlides(); // refresh slides

        } catch (error) {

            console.error("Delete error:", error);

        }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">

            {/* Page Header */}

            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Slides Manager
                </h1>
            </div>

            {/* Add Slide Card */}

            <div className="bg-white rounded-3xl shadow-xl p-8 mb-10 border border-gray-100">

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Add New Slide
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {/* Image URL */}

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500 mb-1">
                            Image URL
                        </label>

                        <input
                            name="image"
                            placeholder="https://image-url.com"
                            value={form.image}
                            onChange={handleChange}
                            className="border border-gray-200 text-black p-3 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-orange-400 
                focus:border-transparent transition"
                        />
                    </div>

                    {/* Title */}

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500 mb-1">
                            Slide Title
                        </label>

                        <input
                            name="title"
                            placeholder="Enter slide title"
                            value={form.title}
                            onChange={handleChange}
                            className="border border-gray-200 text-black p-3 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-orange-400 
                focus:border-transparent transition"
                        />
                    </div>

                    {/* Tag */}

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500 mb-1">
                            Tag
                        </label>

                        <input
                            name="tag"
                            placeholder="Ex: Featured / New"
                            value={form.tag}
                            onChange={handleChange}
                            className="border border-gray-200 text-black p-3 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-orange-400 
                focus:border-transparent transition"
                        />
                    </div>

                </div>

                {/* Image Preview */}

                {form.image && (

                    <div className="mt-8">

                        <p className="text-sm text-gray-500 mb-3">
                            Image Preview
                        </p>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 w-fit shadow-sm">

                            <img
                                src={form.image}
                                alt="preview"
                                className="w-64 rounded-xl object-cover"
                            />

                        </div>

                    </div>

                )}

                {/* Button */}

                <button
                    onClick={addSlide}
                    className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 
        hover:from-orange-600 hover:to-orange-700
        text-white px-7 py-3 rounded-xl font-medium
        shadow-md hover:shadow-lg transition-all duration-200"
                >
                    Add Slide
                </button>

            </div>

            {/* Slides List */}

            <div className="bg-white rounded-2xl shadow-lg p-6">

                <h2 className="text-xl font-semibold mb-6 text-gray-700">
                    All Slides
                </h2>

                {slides.length === 0 ? (

                    <div className="text-center text-gray-400 py-10">
                        No slides added yet
                    </div>

                ) : (

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead>

                                <tr className="text-left text-gray-600 border-b">

                                    <th className="py-3">Image</th>
                                    <th>Title</th>
                                    <th>Tag</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {slides.map((slide) => (

                                    <tr
                                        key={slide._id}
                                        className="border-b hover:bg-gray-50 transition"
                                    >

                                        <td className="py-3">

                                            <img
                                                src={slide.image}
                                                alt=""
                                                className="w-20 rounded-lg shadow-sm"
                                            />

                                        </td>

                                        <td className="font-medium text-gray-700">
                                            {slide.title}
                                        </td>

                                        <td>

                                            <span className="bg-orange-100 text-orange-600 px-3 py-1 text-sm">
                                                {slide.tag}
                                            </span>

                                        </td>

                                        <td>

                                            <button
                                                onClick={() => deleteSlide(slide._id)}
                                                className="bg-red-100 text-red-600 px-3 py-1 hover:bg-red-200 transition"
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </div>
    );
}