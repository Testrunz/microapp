import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <div>
        <h1>Welcome!!!</h1>
        <Link to="/signup">Sign up</Link>
        <br/>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
