import React from "react";

function About() {
  return (
    <div>
      {/* About Banner */}
      <section className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">About Beauty Bliss</h1>
          <p className="lead text-secondary">
            Discover beauty, confidence, and self-care with us.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800"
              alt="Beauty Products"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <h2 className="fw-bold text-danger">Our Story</h2>
            <p className="text-secondary mt-3">
              Beauty Bliss started with a simple idea: everyone deserves to feel
              beautiful and confident. We bring together a carefully selected
              collection of skincare, makeup, and beauty products to make your
              beauty journey special.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-danger">Our Mission</h2>
          <p
            className="text-secondary mt-3 mx-auto"
            style={{ maxWidth: "800px" }}
          >
            Our mission is to make quality beauty products accessible to
            everyone. We aim to provide a convenient shopping experience,
            trusted products, and excellent customer service.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow h-100 p-4">
              <h4 className="text-danger">Quality Products</h4>
              <p className="text-secondary">
                We offer carefully selected beauty and skincare products for
                your daily beauty needs.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow h-100 p-4">
              <h4 className="text-danger">Affordable Prices</h4>
              <p className="text-secondary">
                Enjoy your favourite beauty essentials at reasonable and
                budget-friendly prices.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow h-100 p-4">
              <h4 className="text-danger">Customer Satisfaction</h4>
              <p className="text-secondary">
                Your happiness matters to us. We focus on providing a smooth and
                enjoyable shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
