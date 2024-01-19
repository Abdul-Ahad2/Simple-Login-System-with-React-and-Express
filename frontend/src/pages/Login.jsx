import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { password, email } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <p className="heading">
          <FaSignInAlt /> Login
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Login" className="btn" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
