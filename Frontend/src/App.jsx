import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./components/Index";
import Account from "./components/Account";
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Pricing from './components/Pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          {/* Home page */}
          <Route index element={<Home />} />

          {/* Account page */}
          <Route path="account" element={<Account />} />

          {/* About page */}
          <Route path="about" element={<About />} />

          {/* Services page */}
          <Route path="services" element={<Services />} />

          {/* Projects page */}
          <Route path="projects" element={<Projects />} />

          {/* Team page */}
          <Route path="team" element={<Team />} />

          {/* Pricing page */}
          <Route path="pricing" element={<Pricing />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App