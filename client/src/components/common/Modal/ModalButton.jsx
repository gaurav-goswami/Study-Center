import React from "react";

const ModalButton = ({
  children,
  onClickFn,
  text,
  disabled,
  outline = false,
  customClass,
  type,
}) => {
  return (
    <button disabled={disabled} onClick={onClickFn} type={type}>
      {children ? (
        <>
          <span>{text}</span>
          {children}
        </>
      ) : (
        { text }
      )}
    </button>
  );
};

export default ModalButton;
