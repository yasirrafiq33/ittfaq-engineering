import React from "react";
import NavBar from "../Navbar";

export default async function Header() {
  return (
    <header className="wide-container top-0 z-50 mx-auto md:sticky">
      <NavBar />
    </header>
  );
}