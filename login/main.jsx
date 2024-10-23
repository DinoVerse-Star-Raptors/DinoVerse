import React from "react";
import { createRoot } from "react-dom/client";
import "../style.css";
import utilStyles from "./login.module.css";
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
                href="/login"
              >
                Log In
              </a>
              <a
                className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl text-white hover:bg-indigo-700 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
                href="/register"
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

function Login() {
  return (
    <section>
      <div class="min-h-screen bg-center bg-cover bg-no-repeat bg-[url('/bg-desktop.webp')] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-2xl">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-blue-500">
              Enjoy the trip with Voyage
            </h2>
            <p class="mt-2 text-center text-xl text-gray-900 font-semibold">
              Welcome
            </p>
          </div>
          <form class="mt-8 space-y-6">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email" class="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required=""
                  class="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
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
                  autocomplete="current-password"
                  required=""
                  class="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  for="remember-me"
                  class="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>
          </form>
          <div class="text-center">
            <p class="mt-2 text-sm text-gray-600">
              Don't have an account?
              <a
                class="font-medium text-blue-600 hover:text-blue-500"
                href="/register"
              >
                Create one
              </a>
            </p>
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
        <Login />
      </main>
      <footer>Footer</footer>
    </>
  );
}

const root = createRoot(document.querySelector("#app"));
root && root.render(<Layout />);
