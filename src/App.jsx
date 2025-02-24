import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Nav/Header";
import HomePageBanner from "./components/HomePage/HomePageBanner/HomePageBanner";
import HomePageAboutUs from "./components/HomePage/HomePageAboutUs/HomePageAboutUs";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Nav/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FloatingSocialMedia from "./components/FloatingSocialMedia";

function App() {
  return (
    <>
      <section>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </Router>
      <FloatingSocialMedia/>
      </section>
    </>
  );
}

export default App;
