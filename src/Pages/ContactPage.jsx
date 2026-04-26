function ContactPage() {
  return (
    <main className="main-content">
      <section className="contact-page">
        <h2>Contact Us</h2>

        <form className="contact-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <textarea placeholder="Enter your message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;