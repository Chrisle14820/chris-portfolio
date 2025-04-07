import "./Contact.css";
import Card from "../../components/Card";

function Contact() {
  return (
    <div className="contact-section">
      <Card header="Contact Me">
        <div className="form-container">
          <form
            action="https://formsubmit.co/787a5f347b594ee4e09866f243fd520a"
            method="POST"
            className="contact-form"
          >
            <div className="form-group">
              <div className="col">
                <label htmlFor="fName">First Name</label>
                <input
                  type="text"
                  name="fname"
                  className="form-controls"
                  id="fName"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="lName">Last Name</label>
                <input
                  className="form-controls"
                  type="text"
                  name="lname"
                  id="lName"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="email">Email</label>
              <input
                className="form-controls"
                type="email"
                name="email"
                id="email"
                placeholder="johnDoe@gmail.com"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="phone">Phone Number</label>
              <input
                className="form-controls"
                type="tel"
                name="phone"
                id="phone"
                placeholder="10-digit phone number"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-controls"
                name="message"
                id="message"
                placeholder="Leave me a message..."
                rows="10"
              />
            </div>
            <button className="form-button" type="submit">
              <h3>Send message</h3>
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default Contact;
