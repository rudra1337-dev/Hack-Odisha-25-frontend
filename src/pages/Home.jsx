import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EditProfile from "../components/EditProfile";
import "../styles/Home.css"; // custom styles
import { useNavigate } from "react-router-dom";

export default function Home({ role }) {
  const [user, setUser] = useState({
    name: "Rudra Sharma",
    adhar: "1234-5678-9101",
    age: 25,
    bloodGroup: "B+",
    gender: "Male",
    phone: "9876543210",
    relativePhone: "9123456780",
    email: "rudra@example.com",
    location: "Delhi, India",
    photo: "",
  });

  const [showEdit, setShowEdit] = useState(false);
  console.log(role);

  const handleSaveProfile = (updatedUser) => {
    setUser(updatedUser);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/request-form", { state: { profile: user } });
  };

  return (
    <div className="profile-bg">
      <Container className="py-5">
        {showEdit ? (
          <EditProfile
            userData={user}
            onSave={handleSaveProfile}
            onClose={() => setShowEdit(false)}
          />
        ) : (
          <Card className="profile-card shadow-lg p-4 border-0 fade-in position-relative">
            {/* 🔹 Role Tag inside the card */}
            <span className="role-tag">{role}</span>

            <Row className="align-items-center g-4">
              <Col xs={12} md={4} className="text-center">
                <div className="profile-img-wrapper">
                  <img
                    src={user.photo || "https://via.placeholder.com/150"}
                    alt="Profile"
                    className="profile-img"
                  />
                </div>
              </Col>

              <Col xs={12} md={8}>
                <h2 className="fw-bold text-danger mb-3">{user.name}</h2>
                <div className="info-item"><strong>Aadhar:</strong> {user.adhar}</div>
                <div className="info-item"><strong>Age:</strong> {user.age}</div>
                <div className="info-item"><strong>Blood Group:</strong> {user.bloodGroup}</div>
                <div className="info-item"><strong>Gender:</strong> {user.gender}</div>
                <div className="info-item"><strong>Phone:</strong> {user.phone}</div>
                <div className="info-item"><strong>Relative Phone:</strong> {user.relativePhone}</div>
                <div className="info-item"><strong>Email:</strong> {user.email}</div>
                <div className="info-item"><strong>Location:</strong> {user.location}</div>

                <div className="d-flex gap-3 mt-4 flex-wrap">
                  <Button
                    variant="danger"
                    className="fw-bold shadow-lg custom-btn-danger"
                    onClick={handleClick}
                  >
                    🚨 Send Request
                  </Button>
                  <Button
                    variant="warning"
                    className="fw-bold shadow-lg custom-btn-warning"
                    onClick={() => setShowEdit(true)}
                  >
                    ✏️ Edit Profile
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        )}
      </Container>
    </div>
  );
}