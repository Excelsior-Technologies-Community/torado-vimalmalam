import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Manager from "./pages/Manager";
import Slides from "./pages/Slides";
import Projects from "./pages/Projects"
import AdminTeam from "./pages/AdminTeam";
import AdminTestimonials from "./pages/AdminTestimonials";
import AdminProcess from "./pages/AdminProcess"
import AdminBlog from "./pages/AdminBlog";
import AdminAllServices from "./pages/AdminAllServices";

function App() {
  const isLoggedIn = () => !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/services"
          element={isLoggedIn() ? <Services /> : <Navigate to="/login" />}
        />
        <Route
          path="/manager"
          element={isLoggedIn() ? <Manager /> : <Navigate to="/login" />}
        />
        <Route
          path="/project"
          element={isLoggedIn() ? <Projects /> : <Navigate to="/project" />}
        />
        <Route
          path="/team"
          element={isLoggedIn() ? <AdminTeam /> : <Navigate to="/team" />}
        />
        <Route
          path="/slides"
          element={isLoggedIn() ? <Slides /> : <Navigate to="/slides" />}
        />
        <Route
          path="/testimonials"
          element={isLoggedIn() ? <AdminTestimonials /> : <Navigate to="/testimonials" />}
        />
        <Route
          path="/process"
          element={isLoggedIn() ? <AdminProcess /> : <Navigate to="/process" />}
        />
        <Route
          path="/blogs"
          element={isLoggedIn() ? <AdminBlog /> : <Navigate to="/blogs" />}
        />
        <Route
          path="/allservices"
          element={isLoggedIn() ? <AdminAllServices /> : <Navigate to="/allservices" />}
        />
        <Route path="*" element={<Navigate to="/services" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
