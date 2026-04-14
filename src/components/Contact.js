import React, { useState } from "react";
import "./Contact.css";


function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="contact-section" id="contact">

      <h1 className="contact-title">Get in Touch</h1>

      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          <h2 style={{color : '#2268ff'}}>Let’s talk</h2>
          <p>We’d love to hear from you.</p>

          <div className="contact-info">
            <p>📍 ITM SLS BARODA UNIVERSITY</p>
            <p>📧 contact@mail.com</p>
            <p>📞 +91 9876543210</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <input
                type="text"
                name="name"
                value={formData.name} 
                onChange={handleChange}
                required
              />
              <label>Name</label>
            </div>

             <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </div>

             <div className="input-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
              ></textarea>
              <label>Message</label>
            </div>

            <button type="submit">Send Message →</button>

          </form>
        </div>

      </div>

      {/* SUCCESS POPUP */}
      {submitted && (
        <div className="popup">
          Message Sent Successfully 🚀
        </div>
      )}

    </section>
  );
}

export default Contact;