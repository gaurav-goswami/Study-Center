import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, path, styles}) => {
  return (
    <>
      <Link to = {path} className="text-center w-fit">
        <button className={`p-2 rounded-md outline-none font-semibold ${styles} flex gap-2 items-center text-center`}>
          {children}
        </button>
      </Link>
    </>
  );
};

export default Button;
