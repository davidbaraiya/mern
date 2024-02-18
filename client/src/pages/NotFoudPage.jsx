import React from "react";
import { Link } from "react-router-dom";

const NotFoudPage = () => {
  return (
    <section className="pt pb">
      <div className="container">
        <div className="text-center">
          <h2 className="capitalize text-6xl mb-4">404 Error</h2>
          <Link to="/" className="btn mt-4">
            Go To Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoudPage;
