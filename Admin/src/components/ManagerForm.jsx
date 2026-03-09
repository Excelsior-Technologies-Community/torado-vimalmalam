import { useState } from "react";
import "./ManagerForm.css";

export default function ManagerForm({ manager, onSave, onCancel }) {

    const [name, setName] = useState(manager?.name || "");
    const [role, setRole] = useState(manager?.role || "");
    const [profileImage, setProfileImage] = useState(manager?.profileImage || "");
    const [signatureImage, setSignatureImage] = useState(manager?.signatureImage || "");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSave({
            name,
            role,
            profileImage,
            signatureImage
        });
    };

    return (
        <>
            <div className="modal-overlay">
                <div className="form-modal">
                    <h2>Manager Information</h2>

                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Manager Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} required />
                        <input type="text" placeholder="Profile Image URL" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} />
                        <input type="text" placeholder="Signature Image URL" value={signatureImage} onChange={(e) => setSignatureImage(e.target.value)} />

                        <div className="form-actions">
                            <button type="button" onClick={onCancel}>Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}