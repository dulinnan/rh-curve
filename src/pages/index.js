import React from "react";
import "../style/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Feature from "../components/Feature"
import Testimonial from "../components/Testimonial"
import Pricing from "../components/Pricing"
import Faq from "../components/Faq"
import Close from "../components/Close"
// styles

// data

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <main role="main">
        <Hero />
        <Feature />
        <Testimonial /> 
        <Pricing />
        <Faq />
        <Close />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
