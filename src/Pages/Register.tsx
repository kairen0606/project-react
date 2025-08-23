import React, { useState, FormEvent } from "react";
import "../CSS/Register.css";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (phone.length < 10 || phone.length > 11) {
        alert("Please input a valid phone number!");
    return;
    }

    const emailForm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailForm.test(email)) {
        alert("Please enter a valid email address.");
    return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert('Successful Registration!');
    window.location.href = "/login";
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Gender</label>
        <div className="gender-group">
          <button
            type="button"
            className={gender === "male" ? "active" : ""}
            onClick={() => setGender("male")}
          >
            ♂
          </button>
          <button
            type="button"
            className={gender === "female" ? "active" : ""}
            onClick={() => setGender("female")}
          >
            ♀
          </button>
        </div>

        <div className="row">
          <div>
            <label>Date Of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} 
              pattern="[0-9]*"
              required
            />
          </div>
        </div>

        <label>E-mail</label>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>New Password</label>
        <input
          type="password"
          placeholder="********"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="********"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
