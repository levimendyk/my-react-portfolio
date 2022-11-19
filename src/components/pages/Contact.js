import React from "react";
import "../styles/Contact.css";

function Contact() {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }
    return (
      <div className="container mt-5">
        <h2 className="mb-3" id="contact-header">How To Contact Me: </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
          <p>*Please Note: Contact Form Under Construction*</p>
        </form>
        <h3>Contact Information:</h3>
        <h6>Email: levi3743@gmail.com</h6>
        <h6>Phone: 308-440-3743</h6>
        <h6>LinkedIn: https://www.linkedin.com/in/levi-mendyk-2224a386/</h6>
        <h6>GitHub: https://github.com/levimendyk</h6>
      </div>
    );
  };

export default Contact;
