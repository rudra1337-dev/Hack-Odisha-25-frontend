// src/pages/HistoryPage.jsx
import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/RequestHistory.css"; // Custom styles for animations

export default function HistoryPage() {
  const navigate = useNavigate();

  // Dummy history data
  const [history] = useState([
    {
      why: "Medical Emergency",
      what: "Accident on highway",
      where: "NH-44 near Delhi",
      priority: "High",
      id: "1692789000000-123",
      date: "08/23/2025",
      time: "14:35:12",
      user: {
        name: "Rudra Sharma",
        adhar: "1234-5678-9101",
        age: 25,
        gender: "Male",
        phone: "9876543210",
        relativePhone: "9123456780",
        email: "rudra@example.com",
        location: "Delhi, India",
      },
    },
    {
      why: "Fire Alert",
      what: "Kitchen fire in apartment",
      where: "Sector 12, Noida",
      priority: "Medium",
      id: "1692789600000-456",
      date: "08/23/2025",
      time: "15:10:45",
      user: {
        name: "Rudra Sharma",
        adhar: "1234-5678-9101",
        age: 25,
        gender: "Male",
        phone: "9876543210",
        relativePhone: "9123456780",
        email: "rudra@example.com",
        location: "Delhi, India",
      },
    },
  ]);

  const handleCardClick = (id) => {
    const selectedRequest = history.find((item) => item.id === id);
    navigate(`/request/${id}`, { state: { request: selectedRequest } });
  };

  const getPriorityGradient = (priority) => {
    switch (priority) {
      case "High":
        return "linear-gradient(135deg, #ff4b5c, #ff6b6b)";
      case "Medium":
        return "linear-gradient(135deg, #ffaf40, #ffcd60)";
      default:
        return "linear-gradient(135deg, #28c76f, #48e4a0)";
    }
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-4 text-primary text-center animate-title">
        📜 Request History
      </h3>

      {history.map((request) => (
        <Card
          key={request.id}
          className="mb-3 clickable-card fade-in-card"
          onClick={() => handleCardClick(request.id)}
          style={{
            cursor: "pointer",
            background: getPriorityGradient(request.priority),
            color: "white",
            border: "none",
            borderRadius: "15px",
            transition: "transform 0.2s ease-in-out",
          }}
        >
          <Card.Body>
            <Card.Title className="fw-bold">
              {request.why} - {request.priority}
            </Card.Title>
            <Card.Subtitle className="mb-2">
              🆔 ID: {request.id}
              <br />
              🗓 Date: {request.date} | ⏰ Time: {request.time}
            </Card.Subtitle>
            <Card.Text className="mt-2">
              ✍️ Signature: <strong>{request.user.name}</strong>
              <br />
              📍 Location: {request.where}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}