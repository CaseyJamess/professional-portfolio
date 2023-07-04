import React, { useState } from "react";

import Home from "./LandingPageComponents/Home";
import { InView } from "react-intersection-observer";
import ProjectsHome from "./LandingPageComponents/ProjectsHome";
import Contact from "./LandingPageComponents/Contact";
import classNames from "classnames";
import About from "./LandingPageComponents/About";

function LandingPage() {
  return (
    <div>
      <Home />
      <About />
      <ProjectsHome />
      <Contact />
    </div>
  );
}

export default LandingPage;
