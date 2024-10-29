import React from "react";

export default function SimpleFooter() {
  return (
    <div className="w-full px-6 py-2 md:flex md:items-center md:justify-between">
      <span className="text-sm  text-white sm:text-center">
        © 2024{" "}
        <a href="#" className="hover:underline">
          Dino Verse Team
        </a>
        . All Rights Reserved.
      </span>
      <ul className="hidden flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0 lg:flex">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
