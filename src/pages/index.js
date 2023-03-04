import Home from "@/pages/Home";
import Nav from "@/components/Nav";
import React from "react";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";

const index = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Menu />
      <Contact />
    </>
  );
};

export default index;
