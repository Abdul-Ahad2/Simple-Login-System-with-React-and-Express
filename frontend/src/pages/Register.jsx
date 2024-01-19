import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
          <FaUser /> Register
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={name}
              onChange={handleChange}
            />
          </div>

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
            <label htmlFor="name">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter Password"
              name="password2"
              value={password2}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Register" className="btn" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
