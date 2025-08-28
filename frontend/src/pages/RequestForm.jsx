// src/pages/SendRequest.jsx
import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function RequestForm({ onClose }) {
  // Simulated logged-in user profile (could come from context or props)
  const location = useLocation();
  const { profile } = location.state || {}; // Access profile
  const userProfile = profile;

  const [formData, setFormData] = useState({
    why: "",
    what: "",
    where: "",
    priority: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleClear = () => {
    setFormData({ why: "", what: "", where: "", priority: "" });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.why || !formData.what || !formData.where || !formData.priority) {
      setError("⚠️ All fields are required!");
      return;
    }

    try {
      // FULL DETAILS OF REQUEST
      const payload = {
        ...formData,
        id: Date.now() + "-" + Math.floor(Math.random() * 1000),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        user: userProfile,
      };
      
      console.log(payload);

      // Send to backend API
      await axios.post("/api/requests", payload);

      // Show success message for 2 seconds
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false); // Hide after 2 sec
        if (onClose) onClose(); // Close form after submit
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to send request. Try again!");
    }
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-lg">
        <h3 className="text-danger fw-bold mb-4">🚨 Emergency Request</h3>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">✅ Request Sent Successfully!</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Why</Form.Label>
            <Form.Control
              type="text"
              name="why"
              value={formData.why}
              onChange={handleChange}
              placeholder="Reason for request"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">What</Form.Label>
            <Form.Control
              type="text"
              name="what"
              value={formData.what}
              onChange={handleChange}
              placeholder="What you need?"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Where</Form.Label>
            <Form.Control
              type="text"
              name="where"
              value={formData.where}
              onChange={handleChange}
              placeholder="Location of incident"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Priority</Form.Label>
            <div className="d-flex gap-3">
              <Form.Check
                type="radio"
                label={<span className="text-success fw-bold">Low</span>}
                name="priority"
                value="Low"
                onChange={handleChange}
                checked={formData.priority === "Low"}
              />
              <Form.Check
                type="radio"
                label={<span className="text-warning fw-bold">Medium</span>}
                name="priority"
                value="Medium"
                onChange={handleChange}
                checked={formData.priority === "Medium"}
              />
              <Form.Check
                type="radio"
                label={<span className="text-danger fw-bold">High</span>}
                name="priority"
                value="High"
                onChange={handleChange}
                checked={formData.priority === "High"}
              />
            </div>
          </Form.Group>

          <div className="d-flex gap-3 mt-4">
            <Button type="submit" variant="danger" className="fw-bold flex-grow-1">
              📤 Submit
            </Button>
            <Button
              variant="secondary"
              onClick={handleClear}
              className="fw-bold flex-grow-1"
            >
              🗑 Clear
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}