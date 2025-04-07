import "./Contact.css";

function Contact() {
  return (
    <>
      <form
        action="https://formsubmit.co/787a5f347b594ee4e09866f243fd520a"
        method="POST"
      >
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default Contact;
