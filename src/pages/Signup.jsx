import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

export default function Signup() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "no",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setForm((prev) => ({ ...prev, profilePic: imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(form); // save user data globally
    navigate("/account");
  };

  return (
    <div className="form-card">
      <h2>Create your PopX account</h2>

      <form onSubmit={handleSubmit}>
        <label className="label">Full Name *</label>
        <input className="input" name="fullname" value={form.fullname} onChange={handleChange} required />

        <label className="label">Phone number *</label>
        <input className="input" name="phone" value={form.phone} onChange={handleChange} required />

        <label className="label">Email address *</label>
        <input className="input" name="email" type="email" value={form.email} onChange={handleChange} required />

        <label className="label">Password *</label>
        <input className="input" name="password" type="password" value={form.password} onChange={handleChange} required />

        <label className="label">Company name</label>
        <input className="input" name="company" value={form.company} onChange={handleChange} />

        <div className="label">Are you an Agency?</div>
        <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
          <label className="small-radio">
            <input type="radio" name="agency" value="yes" checked={form.agency === "yes"} onChange={handleChange} /> Yes
          </label>
          <label className="small-radio">
            <input type="radio" name="agency" value="no" checked={form.agency === "no"} onChange={handleChange} /> No
          </label>
        </div>

        <label className="label">Profile Picture</label>
        <input type="file" accept="image/*" onChange={handleImage} />

        {form.profilePic && (
          <div style={{ marginTop: "10px" }}>
            <img
              src={form.profilePic}
              alt="Preview"
              width="80"
              height="80"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </div>
        )}

        <button type="submit" className="btn primary" style={{ marginTop: "16px" }}>
          Create Account
        </button>
      </form>
    </div>
  );
}
