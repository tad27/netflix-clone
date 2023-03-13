import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/icons/logo";

function Navbar({ showSignInButton = false }) {
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setOnScroll(true) : setOnScroll(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-screen py-2 pr-4 md:pr-0 top-0 h-14 overflow-hidden z-10 transition-colors duration-500
     ${onScroll && "bg-brand-black/75"}`}
    >
      <div className="flex items-center justify-between px-2 sm:px-8 mx-auto">
        <div className="logo flex-1">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        {showSignInButton && (
          <div className="flex gap-1 items-center">
            <Link to="/login">
              <button className="button button-brand">Sign In</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
