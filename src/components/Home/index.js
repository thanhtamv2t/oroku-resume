import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Team from "./Team";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "../Footer";

const Home = () => {
  return (
    <article className="content">
      <Hero />
      <About />
      <Skills />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />
    </article>
  );
};

export default Home;
