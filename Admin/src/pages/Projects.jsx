import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

export default function AdminServices() {

    const [projects, setProjects] = useState([]);

    const [form, setForm] = useState({
        title: "",
        desc: "",
        image: ""
    });

    const fetchProjects = async () => {
        try {
            const res = await axios.get(`${API}/projects`);
            setProjects(res.data);
        } catch (err) {
            console.error("Error fetching projects:", err);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const addProject = async () => {
        try {
            await axios.post(`${API}/projects`, form);

            fetchProjects();

            setForm({
                title: "",
                desc: "",
                image: ""
            });

        } catch (err) {
            console.error("Error adding project:", err);
        }
    };


    const deleteProject = async (id) => {
        try {
            await axios.delete(`${API}/projects/${id}`);
            fetchProjects();
        } catch (err) {
            console.error("Error deleting project:", err);
        }
    };

    return (

        <div className="p-10">

            <h1 className="text-2xl font-bold mb-6">
                Manage Services
            </h1>


            {/* ADD FORM */}

            <div className="grid gap-4 mb-10">

                <input
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    className="border p-2"
                />

                <input
                    name="desc"
                    placeholder="Description"
                    value={form.desc}
                    onChange={handleChange}
                    className="border p-2"
                />

                <input
                    name="image"
                    placeholder="Image URL"
                    value={form.image}
                    onChange={handleChange}
                    className="border p-2"
                />

                <button
                    onClick={addProject}
                    className="bg-blue-500 text-white p-2"
                >
                    Add Service
                </button>

            </div>


            {/* LIST */}

            {projects.map(project => (

                <div
                    key={project._id}
                    className="flex justify-between border p-4 mb-3"
                >

                    <div>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-24 h-24 object-cover rounded"
                        />

                        <h2 className="font-bold">
                            {project.title}
                        </h2>

                        <p>{project.desc}</p>

                    </div>

                    <button
                        onClick={() => deleteProject(project._id)}
                        className="bg-red-500 text-white px-4"
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}