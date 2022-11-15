import React from "react";
import "./styles/Navigation.css";
// import React, { useState } from "react";

export default function Navigation(props) {
  // let [page, setPage] = useState(home);
  return (
    <nav>
      <ul>
        <button onClick={() => props.setCurrentPage("Home")}>
          <li>Home</li>
        </button>
        <button onClick={() => props.setCurrentPage("About")}>
          <li>About</li>
        </button>
        <button onClick={() => props.setCurrentPage("Project")}>
          <li>Projects</li>
        </button>
        <button onClick={() => props.setCurrentPage("Resume")}>
          <li>Resume</li>
        </button>
        <button onClick={() => props.setCurrentPage("Contact")}>
          <li>Contact</li>
        </button>
      </ul>
    </nav>
  );
}
