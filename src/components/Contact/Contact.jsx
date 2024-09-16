import "./Contact.css";
import message_icon from "../../assets/msg-icon.png";
// import location_icon from "../../assets/location-icon.png";
// import phone_icon from "../../assets/phone-icon.png";
// import email_icon from "../../assets/mail-icon.png";
import { useState, useEffect } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "669d4458-125d-4dba-8be3-2c9a8e11b705");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsSending(false);
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a Message <img src={message_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          facere quos velit excepturi asperiores aspernatur, voluptate ipsa
          distinctio, officia quo pariatur, est rerum nihil sapiente odit.
          Debitis voluptate a tempora?
        </p>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="green"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "20px", height: "16px", marginRight: "8px" }}>
              <path d="M4 4h16v16H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            gmmco.official@gmail.com
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="green"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "20px", height: "16px", marginRight: "8px" }}>
              <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72 13 13 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.58 6.58l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.57 2 2 0 0 1 1.72 2.03z" />
            </svg>
            +233243236539
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="green"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "20px", height: "16px", marginRight: "8px" }}>
              <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Post Office Box 1<br />
            Mampong-Beposo, Ashanti
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <div className="result">
          <span
            style={{
              color: result === "Form Submitted Successfully" ? "green" : "red",
            }}>
            {result}
          </span>
        </div>
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Manu Akimidis"
            required
            autoComplete="name"
          />
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+233 23456789"
            required
            autoComplete="phone"
          />
          <label htmlFor="message">Write your message</label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Hi! Your message goes here"
            rows="6"
            required></textarea>

          <button className="btn dark-btn" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-send"
              style={{ marginLeft: "8px", width: "16px", height: "16px" }}>
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
