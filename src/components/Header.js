import React from "react";
import './styles/Header.css';
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="header">
            <h1>Levi Mendyk</h1>
            <Navigation />
        </header>
    );
}
