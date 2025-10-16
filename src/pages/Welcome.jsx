import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        flexDirection: "column",
      }}
    >
      {/* Yellow Dots */}
      <div
        style={{
          position: "relative",
          height: "250px",
          width: "150px",
          marginBottom: "20px",
        }}
      >
        
      </div>

      {/* Welcome Text */}
      <div
        style={{
          width: "300px",
          background: "white",
          borderRadius: "12px",
          padding: "25px 20px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "10px", color: "#222" }}>Welcome to PopX</h3>
        <p style={{ color: "#666", fontSize: "14px", marginBottom: "20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <button
          onClick={() => navigate("/signup")}
          style={{
            backgroundColor: "#6C63FF",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            width: "100%",
            marginBottom: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          style={{
            backgroundColor: "#D3BFFF",
            color: "#333",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            width: "100%",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
