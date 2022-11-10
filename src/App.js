import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Navigation from "./components/Navigation";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
