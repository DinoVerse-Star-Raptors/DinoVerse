import React from "react";
import { Search, ShoppingCart, SquareMenu, Menu } from "lucide-react";
import logo from "/DinoVerse-logo.png";
import uiStyle from "./ui.module.css";

export default function Navbar() {
  return (
    <header className="flex justify-center bg-white shadow-sm max-h-16">
      <nav className="flex items-center justify-between px-4 py-2 w-full max-w-[1440px]">
        <a
          href="/"
          className="flex items-center space-x-2 min-w-[240px] grow-0"
        >
          <img
            src={logo}
            alt="Logo"
            width={211}
            height={49}
            className="max-h-[49px]"
          />
        </a>

        <div className="hidden lg:flex w-full min-w-[360px] max-w-[360px] min-h-[19px] items-center justify-between">
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
        <div className="hidden lg:flex lg:grow" />
        <div className={`${uiStyle.nav_right}`}>
          <div className={`${uiStyle.search_section}`}>
            <input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-1 border-2 min-w-[125px] w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <ShoppingCart className="text-gray-600 w-[24px] min-w-[24px] h-[24px] min-h-[24px]" />
          <button
            variant="default"
            className="bg-blue-500 hover:bg-blue-600 text-white text-[1rem] leading-[1rem] rounded-[20px] w-[70px] min-w-[70px] h-[40px]"
          >
            Login
          </button>
          <Menu className="text-gray-600 w-[36px] min-w-[36px] h-[36px] min-h-[36px] lg:hidden" />
        </div>
      </nav>
    </header>
  );
}
