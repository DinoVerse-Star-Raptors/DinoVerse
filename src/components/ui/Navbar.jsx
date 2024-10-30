import React from "react";
// import a from "next/a";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from "lucide-react";
// import "./style.css";
import logo from "/DinoVerse-logo.png";
// Tell webpack this JS file uses this image

export default function Navbar() {
  return (
    <header className="flex justify-center bg-white shadow-sm">
      <nav className="flex items-center justify-start px-4 py-2 w-full max-w-[1440px]">
        <a href="/" className="flex items-center space-x-2 min-w-min-[211px]">
          <img src={logo} alt="Logo" width={211} height={49} />
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-purple-600"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="text-xl font-bold text-purple-600">DinoVerse</span>*/}
        </a>

        <div className="hidden md:flex w-full max-w-[360px] justify-evenly min-h-[19px] items-center grow">
          <a href="/" className="text-black hover:text-gray-900">
            Home
          </a>
          <a href="/about" className="text-black hover:text-gray-900">
            About
          </a>
          <a href="/toys" className="text-black hover:text-gray-900">
            Toys
          </a>
          <a href="/age" className="text-black hover:text-gray-900">
            Age
          </a>
          <a href="/contact" className="text-black hover:text-gray-900">
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4 grow justify-end">
          <div className="relative mx-[80px] min-w-[438px] w-full">
            <input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-1 border-2 min-w-[260px] w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <ShoppingCart className="text-gray-600 w-6 h-6" />
          <button
            variant="default"
            className="bg-blue-500 hover:bg-blue-600 text-white text-[1rem] leading-[1rem] rounded-[20px] w-[70px] h-[40px] flex justify-center content-center"
          >
            Login
          </button>
        </div>
      </nav>{" "}
    </header>
  );
}
