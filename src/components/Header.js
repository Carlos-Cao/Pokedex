import React from "react";
import { Navbar } from "react-bootstrap";

export default function header() {
  return (
    <div>
      <Navbar bg="dark" variant="light">
        <h1 className="title shadow">Pokedex</h1>
      </Navbar>
      <hr />
    </div>
  );
}
