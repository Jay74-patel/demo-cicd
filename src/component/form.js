import React, { useState } from "react";

export const Form = () => { 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'password' || name === 'confirmPassword') {
      // Check if passwords match
      setPasswordMatch(prevMatch => ({
        ...prevMatch,
        passwordMatch: formData.password === formData.confirmPassword,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match before submitting the form
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    // Add your registration logic here
    console.log('Form submitted:', formData);
    // You can send the form data to your server for registration
    // or perform any other necessary actions.
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        {!passwordMatch && (
          <p style={{ color: 'red' }}>Passwords do not match. Please try again.</p>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};