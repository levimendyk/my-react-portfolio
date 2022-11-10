import React from "react";
import './styles/Navigation.css'
// import React, { useState } from "react";

export default function Navigation() {

// let [page, setPage] = useState(home);
  return (
    <nav>
      <ul>
        <button>
        <li>
          <a href="home">Home</a>
        </li>
        </button>
        <button>
        <li>
          <a href="about">About Me</a>
        </li>
        </button>
        <button>
        <li>
          <a href="projects">Projects</a>
        </li>
        </button>
        <button>
        <li>
          <a href="contact">Contact</a>
        </li>
        </button>
      </ul>
    </nav>
  );
}
