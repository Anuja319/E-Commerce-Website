import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="container-fluid bg-light py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-md-6">
                <h1 className="display-4 fw-bold text-dark">
                  Discover Your Natural Beauty
                </h1>

                <p className="lead text-secondary mt-3">
                  Explore our exclusive collection of beauty and skincare
                  products. Enhance your natural glow with products made to make
                  you feel confident and beautiful.
                </p>

                <NavLink to="/products" className="btn btn-danger mt-3 px-4">
                  Shop Now
                </NavLink>
              </div>

              {/* Right Banner */}
              <div className="col-md-6 text-center mt-4 mt-md-0">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800"
                  alt="Beauty Products"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="container text-center py-5">
          <h2 className="fw-bold">Welcome to Beauty Bliss</h2>
          <p className="text-secondary mt-3">
            Your one-stop destination for skincare, makeup, and beauty
            essentials. Shop your favourites and let your beauty shine!
          </p>
        </section>
      </div>
    </>
  );
}

export default Home;
