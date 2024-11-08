import React from "react";
import { createRoot } from "react-dom/client";
import "../style.css";
import utilStyles from "./checkout.module.css";
import Navbar from "../src/components/ui/Navbar";
import ProductImage from "/assets/product-image.png";
// import viteLogo from "/vite.svg";

function Layout() {
    return (
        <>
        <Navbar />
        <main>
           
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