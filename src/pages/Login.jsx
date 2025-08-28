import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login({ isLogedin, setLogin, setRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setLocalRole] = useState("citizen"); // Default: Citizen

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
    if (setRole) setRole(role); // Pass role to parent if function provided
    console.log("Username:", username, "Password:", password, "Role:", role);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div
        className="card p-4 shadow-lg"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="text-center mb-3">
          <img
            src="https://via.placeholder.com/80"
            alt="User Avatar"
            className="rounded-circle"
          />
        </div>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-3">
            <label className="form-label fw-bold">Login As</label>
            <div className="d-flex gap-3">
              <div className="form-check">
                <input
                  type="radio"
                  id="citizen"
                  name="role"
                  value="citizen"
                  className="form-check-input"
                  checked={role === "citizen"}
                  onChange={(e) => setLocalRole(e.target.value)}
                />
                <label htmlFor="citizen" className="form-check-label">
                  Citizen
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="member"
                  name="role"
                  value="member"
                  className="form-check-input"
                  checked={role === "member"}
                  onChange={(e) => setLocalRole(e.target.value)}
                />
                <label htmlFor="member" className="form-check-label">
                  Member
                </label>
              </div>
            </div>
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a href="#" className="text-decoration-none">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;