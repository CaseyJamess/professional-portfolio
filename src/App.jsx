import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Socials from "./components/socials.jsx";
import About from "./components/about.jsx";
import Portfolio from "./components/portfolio.jsx";
import Interests from "./components/interests.jsx";
import Contact from "./components/contact.jsx";
import Experience from "./components/experience.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Socials />
      <About />
      <Portfolio />
      <Experience />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
