// src/pages/HistoryPage.jsx
import React, { useState } from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

  const getPriorityVariant = (priority) => {
    switch (priority) {
      case "High":
        return "danger";
      case "Medium":
        return "warning";
      default:
        return "success";
    }
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-4 text-center text-primary">📜 Request History</h3>

      <Row>
        {history.map((request) => (
          <Col md={6} lg={4} key={request.id} className="mb-3">
            <Card
              className="shadow-sm border-0 h-100"
              onClick={() => handleCardClick(request.id)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Card.Title className="mb-0">{request.why}</Card.Title>
                  <Badge bg={getPriorityVariant(request.priority)}>
                    {request.priority}
                  </Badge>
                </div>
                <Card.Subtitle className="text-muted small mb-2">
                  🆔 {request.id}
                </Card.Subtitle>
                <Card.Text className="mb-1">
                  <strong>📍 Location:</strong> {request.where}
                </Card.Text>
                <Card.Text className="mb-1">
                  <strong>👤 By:</strong> {request.user.name}
                </Card.Text>
                <Card.Text className="small text-muted">
                  🗓 {request.date} | ⏰ {request.time}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}