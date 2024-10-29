// import React from "react";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import utilStyles from "./login.module.css";
import viteLogo from "/vite.svg";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
// import { Alert, AlertDescription } from "@/components/ui/alert";

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

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    console.log("Form submitted:", formData);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="">
      <div className="min-h-screen bg-gray-50 flex flex-col justify-start py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* Logo placeholder */}
          <div className="mx-auto h-12 w-12 border-2 border-blue-500 rounded-full flex justify-center content-center">
            <img className="w-[26px]" src={`${viteLogo}`} alt="Vite Logo" />
          </div>

          {/* Page title */}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>

          {/* Secondary text */}
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/register/"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </a>
          </p>
        </div>

        {/* Form container */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* Error message display */}
            {/* {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )} */}

            {/* Login form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email input group */}
              {/* <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    maxlength="255"
                    minLength="5"
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="you@example.com"
                    autocomplete="off"
                  />
                </div>
              </div> */}

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    maxlength="32"
                    minLength="3"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="username"
                    autocomplete="off"
                    pattern="^[a-z][a-z0-9_-]{3,32}"
                  />
                </div>
              </div>

              {/* Password input group */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                    value={formData.password}
                    onChange={handleChange}
                    maxlength="255"
                    minLength="8"
                    placeholder="password"
                    autocomplete="off"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                  {/* Toggle password visibility button */}
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent hover:border-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me and Forgot password row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me,
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>

            {/* Social login options */}
            <div className="mt-6 hidden">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {/* Google login button */}
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  Google
                </button>
                {/* GitHub login button */}
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>
              Explore incredible journeys with Toy Shop's exclusive packages and
              handpicked offers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>Destinations</li>
              <li>Special Deals</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-2">
              Sign up for the latest updates and exclusive deals with Toy Shop
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded text-gray-800"
            />
            <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded">
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
        <Login />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <Footer />
      </footer>
    </>
  );
}

const root = createRoot(document.querySelector("#app"));
root &&
  root.render(
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  );
