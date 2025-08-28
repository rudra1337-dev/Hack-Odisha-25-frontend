// src/components/EditProfile.jsx
import React, { useState } from "react";
import { Card, Form, Button, Alert, Row, Col } from "react-bootstrap";

export default function EditProfile({ userData, onSave, onClose }) {
  const [formData, setFormData] = useState({ ...userData });
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      adhar: "",
      age: "",
      gender: "",
      phone: "",
      relativePhone: "",
      email: "",
      location: "",
      photo: "",
    });
  };

  const handleSave = () => {
    // Validation: no empty fields
    for (let key in formData) {
      if (formData[key] === "") {
        setError("⚠️ Please fill in all fields before saving.");
        
        return;
      }
    }

    setError("");
    onSave(formData); // send updated data back to parent
    console.log(formData);

    // Show success popup
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose(); // close edit form
    }, 2000);
  };

  return (
    <Card className="shadow-lg p-4 border-0" style={{ borderRadius: "20px" }}>
      <h3 className="text-center fw-bold text-warning mb-3">✏️ Edit Profile</h3>

      {error && <Alert variant="danger">{error}</Alert>}
      {showSuccess && <Alert variant="success">✅ Successfully Saved!</Alert>}

      <Form>
        <Row className="g-3">
          {Object.keys(formData).map((key, idx) =>
            key !== "photo" ? (
              <Col xs={12} md={6} key={idx}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder={`Enter ${key}`}
                  />
                </Form.Group>
              </Col>
            ) : (
              <Col xs={12} key={idx}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Photo URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                    placeholder="Enter Photo URL"
                  />
                </Form.Group>
              </Col>
            )
          )}
        </Row>

        <div className="d-flex justify-content-between mt-4">
          <Button variant="success" onClick={handleSave}>
            💾 Save
          </Button>
          <Button variant="secondary" onClick={handleClear}>
            🧹 Clear
          </Button>
          <Button variant="danger" onClick={onClose}>
            ❌ Cancel
          </Button>
        </div>
      </Form>
    </Card>
  );
}