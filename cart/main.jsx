import React from "react";
import { createRoot } from "react-dom/client";
import "../style.css";
import utilStyles from "./cart.module.css";
import Navbar from "../src/components/ui/Navbar";
import ProductImage from "/assets/product-image.png";
// import viteLogo from "/vite.svg";

function Layout() {
    return (
        <>
        <Navbar />
        <main className="min-h-svh mt-16 py-2 w-full max-w-[1440px] ml-[200px]">
            <h1 className="text-3xl">Cart</h1>

            {/* main section */}
            <div className="flex">

                {/* Left Section - Product items in Cart */}
                <div className="w-2/3">

                    {/* item no.1 */}
                    <div className="flex border">
                        {/* item image */}
                        <img 
                        src={ProductImage}
                        alt="" 
                        className={utilStyles.Product_Image}/>

                        {/* item details */}
                        <div>
                            <h2 className="text-2xl">Baby Toy Ring Tower</h2>
                            <p>A classic stacking toy featuring colorful rings of different sizes. It helps develop fine motor skills, hand-eye coordination, and problem-solving abilities.</p>
                            <div className="flex">
                                <p>Qty:</p>
                                <button className="bg-white border border-gray-100">-</button>
                                <span>1</span>
                                <button className="bg-white border border-gray-100">+</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Order Summary */}
                <div className="border w-1/3">
                    <h2 className="text-2xl border-b">ORDER SUMMARY</h2>
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