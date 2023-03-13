import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-[50vh] grid place-content-center text-center space-y-2">
        <h1>Oops! You're in the wrong place.</h1>
        <Link className="block" to="/">
          <button className="button button-brand">Go Home</button>
        </Link>
      </div>
    </>
  );
}

export default NotFound;
