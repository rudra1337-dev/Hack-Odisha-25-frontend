import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Container, Card, Row, Col, Button, Badge } from "react-bootstrap";
import "animate.css"; // Animation library

export default function RequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { request } = location.state || {};

  if (!request) {
    return (
      <Container className="mt-5 text-center">
        <h4 className="text-danger">❌ No request data found</h4>
        <Button variant="primary" className="mt-3" onClick={() => navigate(-1)}>
          ⬅ Back
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4 animate__animated animate__fadeIn">
      <Card className="shadow-lg border-0 rounded-4 p-4 bg-light">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="fw-bold text-primary">
              🚨 {request.why}
            </h3>
            <Badge
              bg={
                request.priority === "High"
                  ? "danger"
                  : request.priority === "Medium"
                  ? "warning"
                  : "success"
              }
              className="p-2 fs-6"
            >
              {request.priority}
            </Badge>
          </div>

          <p className="text-muted mb-4">
            🆔 <strong>{id}</strong>
          </p>

          <Row className="mb-4">
            <Col md={6} className="mb-3">
              <Card className="border-0 shadow-sm p-3 animate__animated animate__fadeInLeft">
                <h6 className="text-secondary">📅 Date</h6>
                <p className="fw-bold">{request.date}</p>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="border-0 shadow-sm p-3 animate__animated animate__fadeInRight">
                <h6 className="text-secondary">⏰ Time</h6>
                <p className="fw-bold">{request.time}</p>
              </Card>
            </Col>
          </Row>

          <Card className="mb-4 border-0 shadow-sm p-3 bg-white animate__animated animate__fadeInUp">
            <h6 className="text-secondary">📍 Location</h6>
            <p className="fw-bold">{request.where}</p>
          </Card>

          <Card className="mb-4 border-0 shadow-sm p-3 bg-white animate__animated animate__fadeInUp">
            <h6 className="text-secondary">📝 What Happened</h6>
            <p>{request.what}</p>
          </Card>

          <Card className="mb-4 border-0 shadow-sm p-3 bg-white animate__animated animate__fadeInUp">
            <h6 className="text-secondary">✍️ Sender Details</h6>
            <p>
              <strong>Name:</strong> {request.user.name} <br />
              <strong>Aadhar:</strong> {request.user.adhar} <br />
              <strong>Age:</strong> {request.user.age} <br />
              <strong>Gender:</strong> {request.user.gender} <br />
              <strong>Phone:</strong> {request.user.phone} <br />
              <strong>Relative's Phone:</strong> {request.user.relativePhone} <br />
              <strong>Email:</strong> {request.user.email} <br />
              <strong>Address:</strong> {request.user.location}
            </p>
          </Card>

          <div className="text-center">
            <Button
              variant="outline-primary"
              size="lg"
              className="px-4 fw-bold animate__animated animate__pulse animate__infinite"
              onClick={() => navigate(-1)}
            >
              ⬅ Back to History
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}