import React, { useState } from "react";
import "./App.css";
import Project from "./components/pages/Project";
import Resume from "./components/pages/Resume";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Project":
        return <Project />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
