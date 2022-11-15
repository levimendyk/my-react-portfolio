import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Home from "./Home";
import About from "./About";
import Project from "./Project";

export default function Pages() {
    const [currentPage, setCurrentPage] = useState("Home");

    const renderPage = () => {
        switch (currentPage) {
            case "Home":
                return <Home />;
            case "About":
                return <About />
            case "Project":
                return <Project />
            case "Resume":
                return <Resume />
            case "Contact":
                return <Contact />
            default:
                return <Home />
        }
    }

    const handlePageChange = (page) => setCurrentPage;

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

