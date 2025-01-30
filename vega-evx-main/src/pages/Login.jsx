import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        { email, password }
      );
      console.log("Login successful", response.data);
      navigate("/Models");
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="login-button">Login</button>
          </form>
          {/* Add the paragraph inside the login card container */}
          <p className="register-link">
            Dont have an account? <a href="/Register">Create new</a>
          </p>
        </div>
      </div>

      {/* Footer included here */}
      <Footer />
    </div>
  );
}

export default Login;
