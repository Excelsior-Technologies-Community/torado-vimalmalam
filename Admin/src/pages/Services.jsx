import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import ServiceForm from "../components/ServiceForm";
import "./Services.css";

const API = "http://localhost:5000/api";

export default function Services() {
    const [services, setServices] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editService, setEditService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleteId, setDeleteId] = useState(null);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    const fetchServices = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${API}/services`);
            setServices(res.data);
        } catch (err) {
            console.error("Error fetching services:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleSave = async (data) => {
        try {
            if (editService) {
                await axios.put(`${API}/services/${editService._id}`, data, { headers });
            } else {
                await axios.post(`${API}/services`, data, { headers });
            }
            setShowForm(false);
            setEditService(null);
            fetchServices();
        } catch (err) {
            alert(err.response?.data?.message || "Error saving service");
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API}/services/${id}`, { headers });
            setDeleteId(null);
            fetchServices();
        } catch (err) {
            alert(err.response?.data?.message || "Error deleting service");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <div className="brand-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span className="brand-name">Torado</span>
                    <span className="brand-tag">Admin</span>
                </div>

                <nav className="sidebar-nav">
                    <div className="nav-section-label">Main Menu</div>
                    <a href="#" className="nav-item active">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="3" />
                            <path d="M7 10h10M7 14h6" />
                        </svg>
                        Services
                        <span className="nav-badge">{services.length}</span>
                    </a>
                    <Link to="/manager" className="nav-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>

                        Manager
                    </Link>
                    <Link to="/slides" className="nav-item">
                        <svg width="18" height="18" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round">

                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />

                        </svg>

                        Slides
                    </Link>
                    <Link to="/project" className="nav-item">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>

                        Projects
                    </Link>
                    <Link to="/team" className="nav-item">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
                            <circle cx="12" cy="7" r="4" />
                            <path d="M18 8a3 3 0 1 1 0-6" />
                            <path d="M6 8a3 3 0 1 0 0-6" />
                        </svg>

                        Team
                    </Link>
                </nav>

                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={handleLogout}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Top Bar */}
                <header className="topbar">
                    <div className="topbar-left">
                        <h1 className="page-title">Services</h1>
                        <p className="page-subtitle">Manage your service offerings</p>
                    </div>
                    <div className="topbar-right">
                        <button
                            className="btn-primary"
                            onClick={() => { setEditService(null); setShowForm(true); }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            Add Service
                        </button>
                    </div>
                </header>

                {/* Stats Cards */}
                <div className="stats-row">
                    <div className="stat-card">
                        <div className="stat-icon stat-icon-total">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="3" />
                                <path d="M7 10h10M7 14h6" />
                            </svg>
                        </div>
                        <div className="stat-info">
                            <span className="stat-value">{services.length}</span>
                            <span className="stat-label">Total Services</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon stat-icon-active">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <div className="stat-info">
                            <span className="stat-value">{services.length}</span>
                            <span className="stat-label">Active</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon stat-icon-bullets">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="8" y1="6" x2="21" y2="6" />
                                <line x1="8" y1="12" x2="21" y2="12" />
                                <line x1="8" y1="18" x2="21" y2="18" />
                                <circle cx="4" cy="6" r="1" />
                                <circle cx="4" cy="12" r="1" />
                                <circle cx="4" cy="18" r="1" />
                            </svg>
                        </div>
                        <div className="stat-info">
                            <span className="stat-value">
                                {services.reduce((sum, s) => sum + (s.bullets?.length || 0), 0)}
                            </span>
                            <span className="stat-label">Total Bullets</span>
                        </div>
                    </div>
                </div>

                {/* Services Table */}
                <div className="table-container">
                    <div className="table-header">
                        <h2 className="table-title">All Services</h2>
                        <span className="table-count">{services.length} items</span>
                    </div>

                    {loading ? (
                        <div className="loading-state">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="skeleton-row">
                                    <div className="skeleton skeleton-img" />
                                    <div className="skeleton-text">
                                        <div className="skeleton skeleton-title" />
                                        <div className="skeleton skeleton-desc" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : services.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="3" />
                                    <path d="M7 10h10M7 14h6" />
                                </svg>
                            </div>
                            <h3>No services yet</h3>
                            <p>Click "Add Service" to create your first service.</p>
                        </div>
                    ) : (
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th className="th-order">#</th>
                                    <th>Service</th>
                                    <th>Description</th>
                                    <th>Bullets</th>
                                    <th className="th-actions">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((s, index) => (
                                    <tr key={s._id} className="table-row" style={{ animationDelay: `${index * 0.05}s` }}>
                                        <td className="td-order">
                                            <span className="order-badge">{s.order}</span>
                                        </td>
                                        <td>
                                            <div className="service-cell">
                                                <div className="service-img-wrap">
                                                    <img src={s.image} alt={s.title} className="service-img" />
                                                </div>
                                                <span className="service-title">{s.title}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="desc-text">
                                                {s.description?.length > 70
                                                    ? s.description.substring(0, 70) + "..."
                                                    : s.description}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="bullets-cell">
                                                {s.bullets?.slice(0, 2).map((b, i) => (
                                                    <span key={i} className="bullet-tag">{b}</span>
                                                ))}
                                                {s.bullets?.length > 2 && (
                                                    <span className="bullet-more">+{s.bullets.length - 2}</span>
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="action-btns">
                                                <button
                                                    className="action-btn edit-btn"
                                                    onClick={() => { setEditService(s); setShowForm(true); }}
                                                    title="Edit"
                                                >
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                                                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    className="action-btn delete-btn"
                                                    onClick={() => setDeleteId(s._id)}
                                                    title="Delete"
                                                >
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="3 6 5 6 21 6" />
                                                        <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>

            {/* Service Form Modal */}
            {showForm && (
                <ServiceForm
                    service={editService}
                    onSave={handleSave}
                    onCancel={() => { setShowForm(false); setEditService(null); }}
                />
            )}

            {/* Delete Confirmation Modal */}
            {deleteId && (
                <div className="modal-overlay" onClick={() => setDeleteId(null)}>
                    <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="delete-modal-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="15" y1="9" x2="9" y2="15" />
                                <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                        </div>
                        <h3>Delete Service?</h3>
                        <p>This action cannot be undone. The service will be permanently removed.</p>
                        <div className="delete-modal-actions">
                            <button className="btn-cancel" onClick={() => setDeleteId(null)}>Cancel</button>
                            <button className="btn-danger" onClick={() => handleDelete(deleteId)}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
