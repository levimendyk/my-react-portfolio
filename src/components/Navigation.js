import React from "react";
import "./styles/Navigation.css";

export default function Navigation(props) {

  return (
    <nav>
      <ul>
        <button onClick={() => props.setCurrentPage("Home")}>
          <li className="nav-li">Home</li>
        </button>
        <button onClick={() => props.setCurrentPage("About")}>
          <li className="nav-li">About</li>
        </button>
        <button onClick={() => props.setCurrentPage("Project")}>
          <li className="nav-li">Projects</li>
        </button>
        <button onClick={() => props.setCurrentPage("Resume")}>
          <li className="nav-li">Resume</li>
        </button>
        <button onClick={() => props.setCurrentPage("Contact")}>
          <li className="nav-li">Contact</li>
        </button>
      </ul>
    </nav>
  );
}
