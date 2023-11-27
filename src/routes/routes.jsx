import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import About from "../pages/about/about";
import Skills from "../pages/skills/skills";
import Projects from "../pages/projects/projects";
import Header from "../components/Header/header";
import "../reset.css";
import Footer from "../components/Footer";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default MyRoutes;
