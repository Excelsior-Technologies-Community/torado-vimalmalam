import { useState } from "react";
import "./ServiceForm.css";

export default function ServiceForm({ service, onSave, onCancel }) {
    const [image, setImage] = useState(service?.image || "");
    const [title, setTitle] = useState(service?.title || "");
    const [description, setDescription] = useState(service?.description || "");
    const [bullets, setBullets] = useState(service?.bullets?.join("\n") || "");
    const [order, setOrder] = useState(service?.order || 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            image,
            title,
            description,
            bullets: bullets.split("\n").filter((b) => b.trim() !== ""),
            order: Number(order),
        });
    };

    return (
        <div className="form-overlay" onClick={onCancel}>
            <div className="form-modal" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="form-header">
                    <div className="form-header-info">
                        <div className="form-header-icon">
                            {service ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            )}
                        </div>
                        <div>
                            <h3 className="form-title">{service ? "Edit Service" : "New Service"}</h3>
                            <p className="form-subtitle">{service ? "Update service details" : "Add a new service to your list"}</p>
                        </div>
                    </div>
                    <button className="form-close-btn" onClick={onCancel} type="button">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="form-body">
                    {/* Image URL + Preview */}
                    <div className="form-group">
                        <label className="form-label">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg>
                            Image URL
                        </label>
                        <input
                            className="form-input"
                            type="url"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="https://example.com/image.png"
                            required
                        />
                        {image && (
                            <div className="image-preview">
                                <img src={image} alt="Preview" onError={(e) => e.target.style.display = 'none'} />
                            </div>
                        )}
                    </div>

                    {/* Title + Order in a row */}
                    <div className="form-row">
                        <div className="form-group" style={{ flex: 1 }}>
                            <label className="form-label">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 7V4h16v3" />
                                    <path d="M9 20h6" />
                                    <path d="M12 4v16" />
                                </svg>
                                Title
                            </label>
                            <input
                                className="form-input"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Service title"
                                required
                            />
                        </div>
                        <div className="form-group" style={{ width: '100px' }}>
                            <label className="form-label">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 20V10" />
                                    <path d="M18 20V4" />
                                    <path d="M6 20v-4" />
                                </svg>
                                Order
                            </label>
                            <input
                                className="form-input"
                                type="number"
                                value={order}
                                onChange={(e) => setOrder(e.target.value)}
                                min="0"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="form-group">
                        <label className="form-label">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                <path d="M14 2v6h6" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                            </svg>
                            Description
                        </label>
                        <textarea
                            className="form-input form-textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe this service..."
                            rows={3}
                            required
                        />
                    </div>

                    {/* Bullets */}
                    <div className="form-group">
                        <label className="form-label">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="8" y1="6" x2="21" y2="6" />
                                <line x1="8" y1="12" x2="21" y2="12" />
                                <line x1="8" y1="18" x2="21" y2="18" />
                                <circle cx="4" cy="6" r="1" />
                                <circle cx="4" cy="12" r="1" />
                                <circle cx="4" cy="18" r="1" />
                            </svg>
                            Bullet Points
                            <span className="form-hint">One per line</span>
                        </label>
                        <textarea
                            className="form-input form-textarea"
                            value={bullets}
                            onChange={(e) => setBullets(e.target.value)}
                            placeholder={"Feature one\nFeature two\nFeature three"}
                            rows={3}
                        />
                    </div>

                    {/* Actions */}
                    <div className="form-actions">
                        <button type="button" className="form-btn-cancel" onClick={onCancel}>
                            Cancel
                        </button>
                        <button type="submit" className="form-btn-save">
                            {service ? (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                                        <polyline points="17 21 17 13 7 13 7 21" />
                                        <polyline points="7 3 7 8 15 8" />
                                    </svg>
                                    Update Service
                                </>
                            ) : (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                    Add Service
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
