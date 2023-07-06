import React from "react";

const Heading = ({ children, style }) => {
  return (
    <>
      <h2 className={`text-white ${style} md:leading-tight`}>{children}</h2>
    </>
  );
};

export default Heading;
