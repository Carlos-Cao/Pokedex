import React from "react";

export default function Footer() {
  function scroll() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <hr />
      <p className="top" onClick={scroll}>
        Back to top &#8593;
      </p>
      <p>
        Made by <a href="https://github.com/carlos-cao">Carlos-Cao</a>
      </p>
    </div>
  );
}
