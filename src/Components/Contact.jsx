import React from "react";

function Contact() {
  return (
    <>
      <div>
        {/* Contact Banner */}
        <section className="bg-light text-center py-5">
          <div className="container">
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="lead text-secondary">
              We'd love to hear from you! Get in touch with Beauty Bliss.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="container py-5">
          <div className="row">
            {/* Contact Information */}
            <div className="col-md-5 mb-4">
              <h2 className="fw-bold text-danger mb-4">Get In Touch</h2>

              <p className="text-secondary">
                Have questions about our beauty products or need assistance?
                Contact us using the details below.
              </p>

              <div className="mt-4">
                <h5 className="fw-bold">📍 Address</h5>
                <p className="text-secondary">Pune, Maharashtra, India</p>
              </div>

              <div className="mt-3">
                <h5 className="fw-bold">📧 Email</h5>
                <p className="text-secondary">support@beautybliss.com</p>
              </div>

              <div className="mt-3">
                <h5 className="fw-bold">📞 Phone</h5>
                <p className="text-secondary">+91 98765 43210</p>
              </div>

              <div className="mt-3">
                <h5 className="fw-bold">🕒 Working Hours</h5>
                <p className="text-secondary">
                  Monday - Saturday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-7">
              <div className="card shadow border-0 p-4">
                <h2 className="fw-bold text-danger mb-4">Send Us a Message</h2>

                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-danger px-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
