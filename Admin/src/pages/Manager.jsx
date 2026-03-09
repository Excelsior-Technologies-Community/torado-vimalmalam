import { useState, useEffect } from "react";
import axios from "axios";
import ManagerForm from "../components/ManagerForm";
import "./Manager.css"

const API = "http://localhost:5000/api";

export default function Manager() {

    const [manager, setManager] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const token = localStorage.getItem("token");

    const headers = {
        Authorization: `Bearer ${token}`
    };

    const fetchManager = async () => {

        const res = await axios.get(`${API}/manager`);

        setManager(res.data);
    };

    useEffect(() => {

        fetchManager();

    }, []);

    const handleSave = async (data) => {

        await axios.put(`${API}/manager`, data, { headers });

        setShowForm(false);

        fetchManager();
    };

    return (

        <div className="main-content">

            <h1>Manager Info</h1>

            {manager && (

                <div>

                    <img src={manager.profileImage} width="120" />

                    <h3>{manager.name}</h3>

                    <p>{manager.role}</p>

                    <img src={manager.signatureImage} width="120" />

                </div>

            )}

            <button onClick={() => setShowForm(true)}>

                Edit Manager

            </button>

            {showForm && (

                <ManagerForm
                    manager={manager}
                    onSave={handleSave}
                    onCancel={() => setShowForm(false)}
                />

            )}

        </div>
    );
}