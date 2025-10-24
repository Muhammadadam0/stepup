import React, { useState } from "react";
import "./BookAppointment.css";

const SERVICES = [
  "Speech Therapy",
  "Psychotherapy",
  "Counseling",
  "Depression",
  "Overthinking",
  "Autism / ADHD",
  "Down Syndrome",
  "Parent-Child Issues",
  "Relationship Issues",
  "Behaviour Modification",
];

function generateToken() {
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `STEPUP-${Date.now().toString(36).toUpperCase()}-${rand}`;
}

export default function BookAppointment() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);

  const ACCESS_KEY = "f1b0a3c8-943a-4cd8-a770-0946cb899b48"; // 👈 apni Web3Forms key yahan daalna

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const appointmentToken = generateToken();
    setToken(appointmentToken);

    const formData = new FormData(e.target);
    formData.append("access_key", ACCESS_KEY);
    formData.append("token", appointmentToken);
    formData.append("subject", `New Appointment Request - Step Up Institute`);
    formData.append("from_name", "Step Up Institute Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        setMessage("Your appointment has been booked successfully!");
        e.target.reset();
      } else {
        setStatus("error");
        setMessage("Something went wrong! Please try again later.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error! Please try again.");
    }
  };

  return (
    // ✅ ID updated so Hero button scrolls correctly
    <section id="appointment" className="appointment-section">
      <div className="appointment-container">
        <h2>Book an Appointment</h2>
        <p className="sub-text">
          Fill out the form below to book your appointment with{" "}
          <strong>Step Up Institute</strong>.
        </p>

        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="03XX-XXXXXXX"
            />
          </div>

          <div className="form-group">
            <label>Select Service</label>
            <select name="service" required defaultValue="">
              <option value="" disabled>
                -- Choose a Service --
              </option>
              {SERVICES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select Preferred Date</label>
            <input type="date" name="date" required />
          </div>

          <div className="form-group">
            <label>Additional Notes</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write any additional information (optional)"
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Submitting..." : "Make an Appointment"}
          </button>
        </form>

        {status === "success" && (
          <div className="success-message">
            <h4>✅ Appointment Booked Successfully!</h4>
            <p>{message}</p>
            <p>
              <strong>Your Token ID:</strong> {token}
            </p>
            <p>
              Please save this token — our team will contact you soon on your
              provided email or phone number.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="error-message">
            <h4>❌ Error!</h4>
            <p>{message}</p>
          </div>
        )}
      </div>
    </section>
  );
}


