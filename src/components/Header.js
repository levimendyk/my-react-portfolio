import React from "react";
import "./styles/Header.css";
import Navigation from "./Navigation";

export default function Header(props) {
  return (
    <header className="header">
      <h1>Levi Mendyk</h1>
  <Navigation setCurrentPage ={props.setCurrentPage}/>
    </header>
  );
}
