import React from "react";
import  "./Header.css";
export default function Header() {
  return (
    <header className="main-header">
      <div className="main-title">
        <h1>Planeto</h1>
      </div>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li className="main-nav-item">Home</li>
          <li className="main-nav-item">Explore</li>
        </ul>
      </nav>
    </header>
  );
}
