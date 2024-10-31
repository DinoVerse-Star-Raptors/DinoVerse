import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import SimpleUI from "./src/components/ui/SimpleUI";
import Navbar from "./src/components/ui/Navbar";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-svh mt-4 max-w-[1440px] mx-[auto]">
        <SimpleUI />
      </main>
      {/* <footer className="bg-gray-800 text-white py-8">
        <SimpleFooter />
      </footer> */}
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
