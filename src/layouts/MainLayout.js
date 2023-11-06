import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./mainLayout.scss";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="main-content">
          <Outlet />
        </div>
      </main>
      <footer>
        <div className="footer-text">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
