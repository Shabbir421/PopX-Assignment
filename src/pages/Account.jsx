import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

function Account() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(-45deg, #6a11cb, #2575fc, #6dd5ed, #2193b0)",
        backgroundSize: "400% 400%",
        animation: "gradient 10s ease infinite",
        padding: "20px",
      }}
    >
      {/* Animated Gradient Background */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          padding: "30px",
          width: "340px",
          textAlign: "center",
          transition: "transform 0.3s ease",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Account Settings</h2>

        <img
          src={user?.profilePic || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-moh-adbelghaffar-771742.jpg&fm=jpg"}
          alt="Profile"
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "15px",
            border: "3px solid #6C63FF",
          }}
        />

        <h3 style={{ margin: "5px 0", color: "#222" }}>{user?.fullName}</h3>
        <p style={{ margin: "5px 0", color: "#666" }}>{user?.email}</p>

        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
          <strong>Company:</strong> {user?.company || "N/A"}
          <br />
          <strong>Phone:</strong> {user?.phone || "N/A"}
          <br />
          <strong>Agency:</strong> {user?.isAgency ? "Yes" : "No"}
        </p>

        {/* 📄 Description Section with Lorem Ipsum */}
        <div
          style={{
            marginTop: "20px",
            fontSize: "13px",
            color: "#555",
            background: "#f9f9ff",
            borderRadius: "8px",
            padding: "10px 15px",
            lineHeight: "1.6",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#6C63FF",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            width: "100%",
            marginTop: "25px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Account;
