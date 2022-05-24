import React from "react";

function Header() {
  const headerStyle = {
    color: "#ccc",
    fontWeight: "400",
    textAlign: "center",
    margin: "50px 20px 20px 20px",
  };

  return <h1 style={headerStyle}>Task Manager</h1>;
}

export default Header;
