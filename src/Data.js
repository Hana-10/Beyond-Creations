import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
import './Data.css';

function Data() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
    terms: false,
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handlePhoneNumberChange = (e) => {
    let value = e.target.value;
    // Remove non-numeric characters
    value = value.replace(/\D/g, "");
    // Limit to 11 digits
    if (value.length <= 11) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, terms: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Clear form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      budget: "",
      message: "",
      terms: false,
    });

    setSuccessMessage("Form submitted successfully!");

  };

  return (
    <div className="container-fluid-new">
      <div className="row">
        <div className="col-md-4 d-flex align-items-stretch">
          <img
            src="woman.jpg"
            className="rounded img-fluid"
            alt="Woman"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center" style={{ backgroundColor: "white", padding: "20px" }}>
          <h3 style={{ color: "steelblue", fontWeight: "normal" }}>Enter your details and our representative will get back to you shortly</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{color:"steelblue"}}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email id"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handlePhoneNumberChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="budget"
                name="budget"
                placeholder="Choose your budget"
                min="0"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleCheckboxChange}
                required
              />
              <label className="form-check-label" htmlFor="terms">
                I agree to the processing of personal data
              </label>
            </div>

            <button type="submit" className="btnn">
              LEAVE A CALL REQUEST
            </button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Data;
