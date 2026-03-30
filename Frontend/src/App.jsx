import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./components/Index";
import Account from "./components/Account";
import About from './components/About';

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

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App