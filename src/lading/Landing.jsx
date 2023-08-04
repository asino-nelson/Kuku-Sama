import React from "react";
import Hero from "../scenes/Hero";
import About from "../scenes/About";
import Menu from "../scenes/Menu";
import Open from "../scenes/Open";
import Booking from "../scenes/Booking";
import Testimonials from "../scenes/Testimonials";
import Gallery from "../scenes/Gallery";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="bg-stone-800 text-white overflow-x-hidden">
      <Hero />
      <About />
      <Menu />
      <Open />
      <Booking />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Landing;
