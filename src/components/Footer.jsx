import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "FAQ", url: "#" },
  { name: "Help Center", url: "#" },
  { name: "Account", url: "#" },
  { name: "Media Center", url: "#" },
  { name: "Investor Relations", url: "#" },
  { name: "Jobs", url: "#" },
  { name: "Ways to Watch", url: "#" },
  { name: "Terms of Use", url: "#" },
  { name: "Privacy", url: "#" },
  { name: "Cookie Preferences", url: "#" },
  { name: "Corporate Information", url: "#" },
  { name: "Contact Us", url: "#" },
  { name: "Speed Test", url: "#" },
  { name: "Legal Notices", url: "#" },
  { name: "Only on Netflix", url: "#" },
];
function Footer() {
  return (
    <footer className="text-xs p-10">
      <div className="w-full max-w-[1000px] mx-auto">
        <a
          className="inline-block mb-[30px]"
          href="https://help.netflix.com/contactus"
        >
          Questions? Contact us.
        </a>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {links.map((link, index) => (
            <li key={index} className="">
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-brand-gray">Netflix Ethiopia</p>
      </div>
    </footer>
  );
}

export default Footer;
