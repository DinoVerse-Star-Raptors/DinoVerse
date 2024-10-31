import React from "react";
import { createRoot } from "react-dom/client";
import "../style.css";
import utilStyles from "./productinfo.module.css";
import Navbar from "../src/components/ui/Navbar";
import ProductImage from "/assets/product-image.png";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-svh mt-16 py-2 w-full max-w-[1440px]">
        <div className="container mx-auto grid grid-cols-2 gap-10 p-10">
          {/* Product Image */}
          <div className="flex justify-center w-full max-w-[600px] max-h-[400px]">
            <img
              src={ProductImage}
              alt="Assorted Fruit & Vegetable"
              className={`rounded-lg shadow-lg h-auto ${utilStyles.Product_Image}`}
            />
          </div>

          <div className="flex flex-col space-y-4">
            {/* <!-- Age, Reviews, Wishlist --> */}
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Age: 18M+</p>
              <a href="#" className="text-red-500 hover:text-red-700">
                Add to Wishlist
              </a>
            </div>

            <div>
              {/* <!-- Product Name, Price, and Ratings --> */}
              <h1 className="text-3xl font-bold text-gray-800">Toy Train</h1>
              <p className="text-2xl font-semibold text-gray-700">$35.00 USD</p>
              <div className="flex items-center space-x-2">
                <img src="/assets/star.png" alt="" />
                <img src="/assets/star.png" alt="" />
                <img src="/assets/star.png" alt="" />
                <img src="/assets/star.png" alt="" />
                <img src="/assets/star.png" alt="" />
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full font-semibold">
                  Best Seller
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Product Description
                </h3>
                <p className="text-gray-600">
                  A fun and educational toy for children featuring a colorful
                  train engine and a passenger car. It encourages imaginative
                  play and helps develop motor skills.
                </p>
              </div>
            </div>

            {/* <!-- Stock Status, Quantity, and Add to Cart Button --> */}
            <div className="bg-gray-100 rounded-lg p-6 space-y-4">
              <p className="text-green-500 font-semibold">In stock</p>

              {/* <!-- Quantity Selector --> */}
              <label
                htmlFor="quantity"
                className="block text-gray-600 font-medium"
              >
                Quantity
              </label>
              <select
                id="quantity"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>

              {/* <!-- Buttons --> */}
              <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700">
                Add to Cart
              </button>
              <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-full flex items-center justify-center hover:bg-indigo-700">
                <span className="mr-2">Buy with</span>
                <span className="text-white font-semibold bg-blue-500 px-2 py-1 rounded-md">
                  shop Pay
                </span>
              </button>

              <a
                href="#"
                className="text-center block text-gray-500 hover:text-gray-700"
              >
                More payment options
              </a>
              {/* <!-- Additional Info --> */}
              <div className="mt-4 space-y-2 text-gray-600">
                <p className="flex items-center">
                  <span className="text-green-500 font-bold mr-2">✓</span>{" "}
                  Eco-friendly materials
                </p>
                <p className="flex items-center">
                  <span className="text-green-500 font-bold mr-2">✓</span> Free
                  shipping on orders over $50 within the contiguous USA.
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Secure payment</span>
                </p>
                {/* <!-- Factors for Child Development Section --> */}
                <div className="mb-10 p-10">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Factors for Child Development
                  </h2>
                  <div className="flex space-x-6 justify-center">
                    <div className="text-center">
                      <img
                        src="/assets/icon+ChildDevelopment+no+text_Cause++Effect.png"
                        alt="Development"
                        className={`mx-auto mb-2 ${utilStyles.Child_Image}`}
                      />
                      <p className="text-gray-600">Development</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="/assets/icon+ChildDevelopment+no+text_Concentration.png"
                        alt="Concentration"
                        className={`mx-auto mb-2 ${utilStyles.Child_Image}`}
                      />
                      <p className="text-gray-600">Concentration</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="/assets/icon+ChildDevelopment+no+text_Imagination.png"
                        alt="Imagination"
                        className={`mx-auto mb-2 ${utilStyles.Child_Image}`}
                      />
                      <p className="text-gray-600">Imagination</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="/assets/icon+ChildDevelopment+no+text_Creative.png"
                        alt="Creative"
                        className={`mx-auto mb-2 ${utilStyles.Child_Image}`}
                      />
                      <p className="text-gray-600">Creative</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="/assets/icon+ChildDevelopment+no+text_Coordination.png"
                        alt="Coordination"
                        className={`mx-auto mb-2 ${utilStyles.Child_Image}`}
                      />
                      <p className="text-gray-600">Coordination</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
