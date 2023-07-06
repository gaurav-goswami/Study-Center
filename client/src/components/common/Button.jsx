import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, path, styles}) => {
  return (
    <>
      <Link to = {path}>
        <button className={`p-2 rounded-md outline-none font-semibold ${styles}`}>
          {children}
        </button>
      </Link>
    </>
  );
};

export default Button;
