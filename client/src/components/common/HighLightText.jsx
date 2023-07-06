import React from "react";

const HighLightText = ({children , color, size}) => {
  return (
    <>
      <span className={`${color} ${size}`}>
        {children}
      </span>
    </>
  );
};

export default HighLightText;
