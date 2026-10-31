import React from "react";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="container text-center py-5">
        <h1 className="display-1 fw-bold text-danger">404</h1>

        <h2 className="fw-bold mt-3">Oops! Page Not Found</h2>

        <p className="text-secondary mt-3">
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        <NavLink to="/" className="btn btn-danger mt-3 px-4">
          Back to Home
        </NavLink>
      </div>
    </>
  );
}

export default PageNotFound;
