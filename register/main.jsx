import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import utilStyles from "./register.module.css";
import viteLogo from "/vite.svg";

function Navbar() {
  return (
    <nav
      className={`bg-white shadow-md relative z-50 w-[100%] ${utilStyles.nav}`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a className="flex items-center" href="/">
              <img className="w-[24px]" src={`${viteLogo}`} alt="Vite Logo" />
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <a
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                href="/login/"
              >
                Log In
              </a>
              <a
                className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl text-white hover:bg-indigo-700 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
                href="/register/"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Register() {
  return (
    <section>
      <div class="min-h-screen bg-center bg-cover bg-no-repeat bg-[url('/bg-desktop.webp')] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-2xl">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-blue-500">
              Delight in the fun with <span>Dino&nbsp;Verse</span>
            </h2>
            <p class="mt-2 text-center text-xl text-gray-900 font-semibold">
              Create a New Account
            </p>
          </div>
          <form class="mt-8 space-y-6">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email" class="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required=""
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm rounded-t-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label for="firstName" class="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autocomplete="firstName"
                  required=""
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label for="lastName" class="sr-only">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autocomplete="lastName"
                  required=""
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label for="password" class="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="password"
                  required=""
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label for="confirmPassword" class="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autocomplete="confirmPassword"
                  required=""
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm rounded-b-md"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div class="text-center">
            <p class="mt-2 text-sm text-gray-600">
              Already have an account?&nbsp;
              <a
                class="font-medium text-blue-600 hover:text-blue-500"
                href="/login"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section>
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">About Us</h3>
            <p>
              Explore incredible journeys with Toy Shop's exclusive packages and
              handpicked offers.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>Destinations</li>
              <li>Special Deals</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Newsletter</h3>
            <p class="mb-2">
              Sign up for the latest updates and exclusive deals with Toy Shop
            </p>
            <input
              type="email"
              placeholder="Your email"
              class="w-full p-2 rounded text-gray-800"
            />
            <button class="mt-2 bg-blue-600 text-white py-2 px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-svh mt-16">
        <Register />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <Footer />
      </footer>
    </>
  );
}

const root = createRoot(document.querySelector("#app"));
root && root.render(<Layout />);
