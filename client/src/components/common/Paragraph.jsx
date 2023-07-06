import React from "react";

const Paragraph = ({ children , styles, color}) => {
  return (
    <>
      <p className={`${color ? color : "text-white"} ${styles}`}>{children}</p>
    </>
  );
};

export default Paragraph;
