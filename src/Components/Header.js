import React from "react";

function Header() {
  return (
    <header>
      <span className="title">Cook With Me</span>
      <br />
      <span className="handwriting">- Angus</span>
      {/* minimize on scroll
      https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp */}
    </header>
  );
}

export default Header;
