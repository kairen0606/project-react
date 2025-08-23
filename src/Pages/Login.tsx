import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import "../CSS/Login.css";
const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Logging in with Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Profile Icon */}
        <div className="profile-icon">👤</div>

        {/* Email */}
        <div className="form-group">
          <input
            type="email"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="form-options">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />{" "}
            Remember me
          </label>
          <Link to="#">Forgot password?</Link>
        </div>

        {/* Login Button */}
        <button type="submit" className="login-btn">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
