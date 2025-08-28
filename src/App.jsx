import { useState } from 'react';
import './App.css';

import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import RequestForm from "./pages/RequestForm.jsx";
import RequestHistory from "./pages/RequestHistory.jsx";
import RequestDetails from "./pages/RequestDetails.jsx";
import AllRequest from "./pages/AllRequest.jsx";

function App() {
  const [isLogedin, setLogin] = useState(false);
  const [role, setRole] = useState("");

  // If not logged in, show Login page
  if (!isLogedin) {
    return <Login isLogedin={isLogedin} setLogin={setLogin} setRole={setRole} />;
  }

  // If role is citizen
  if (role === "citizen") {
    return (
      <div className="app">
        <Navbar role={role} />
        <div>
          <Routes>
            <Route path="/" element={<Home role={role} />} />
            <Route path="/request-form" element={<RequestForm />} />
            <Route path="/request-history" element={<RequestHistory />} />
            <Route path="/request/:id" element={<RequestDetails />} />
          </Routes>
        </div>
      </div>
    );
  }

  // If role is member
  if (role === "member") {
    return (
      <div className="app">
        <Navbar role={role} />
        <div>
          <Routes>
            <Route path="/" element={<Home role={role} />} />
            <Route path="/request-form" element={<RequestForm />} />
            <Route path="/request-history" element={<RequestHistory />} />
            <Route path="/request/:id" element={<RequestDetails />} />
            <Route path="/all-request" element={<AllRequest />} />
          </Routes>
        </div>
      </div>
    );
  }

  // Default (just in case)
  return null;
}

export default App