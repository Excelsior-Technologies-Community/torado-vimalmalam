import { useEffect, useState } from "react";

const API = "http://localhost:5000/api/team";

export default function AdminTeam() {

    const [team, setTeam] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        name: "",
        role: "",
        image: ""
    });

    const fetchTeam = async () => {
        const res = await fetch(API);
        const data = await res.json();
        setTeam(data);
    };

    useEffect(() => {
        fetchTeam();
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // ADD MEMBER
    const addMember = async () => {

        await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        setForm({ name: "", role: "", image: "" });

        fetchTeam();
    };

    // DELETE MEMBER
    const deleteMember = async (id) => {

        await fetch(`${API}/${id}`, {
            method: "DELETE"
        });

        fetchTeam();
    };

    // EDIT MEMBER (Fill Form)
    const editMember = (member) => {

        setForm({
            name: member.name,
            role: member.role,
            image: member.image
        });

        setEditingId(member._id);
    };

    // UPDATE MEMBER
    const updateMember = async () => {

        await fetch(`${API}/${editingId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        setEditingId(null);
        setForm({ name: "", role: "", image: "" });

        fetchTeam();
    };

    return (
        <div className="p-10">

            <h2 className="text-2xl font-bold mb-6">
                Team Admin Panel
            </h2>

            {/* FORM */}

            <div className="grid grid-cols-3 gap-4 mb-10">

                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2"
                />

                <input
                    name="role"
                    placeholder="Role"
                    value={form.role}
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

                {editingId ? (
                    <button
                        onClick={updateMember}
                        className="bg-blue-500 text-white p-2"
                    >
                        Update Member
                    </button>
                ) : (
                    <button
                        onClick={addMember}
                        className="bg-orange-500 text-white p-2"
                    >
                        Add Member
                    </button>
                )}

            </div>

            {/* TEAM LIST */}

            <div className="grid grid-cols-4 gap-6">

                {team.map((member) => (
                    <div key={member._id} className="border p-4">

                        <img
                            src={member.image}
                            className="h-40 w-full object-cover"
                        />

                        <h3 className="font-semibold mt-3">
                            {member.name}
                        </h3>

                        <p className="text-gray-500">
                            {member.role}
                        </p>

                        <div className="flex gap-2 mt-3">

                            <button
                                onClick={() => editMember(member)}
                                className="bg-blue-500 text-white px-3 py-1"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => deleteMember(member._id)}
                                className="bg-red-500 text-white px-3 py-1"
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