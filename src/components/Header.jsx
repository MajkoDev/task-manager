import React from "react";

function Header() {
  const headerStyle = {
    color: "#eeeeee",
    fontWeight: "600",
    textAlign: "center",
    margin: "50px 20px 20px 20px",
  };

  return <h1 style={headerStyle}>Task Manager</h1>;
}

export default Header;
