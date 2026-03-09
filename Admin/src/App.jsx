import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Manager from "./pages/Manager";

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
        <Route path="*" element={<Navigate to="/services" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
