import React from "react";

const Button = ({ name = "Create Workspace", onClickHandler, className }) => {
  return (
    <button
      type="submit"
      onClick={onClickHandler}
      className={`w-full bg-indigo-500 md:max-w-sm max-w-xs py-3 text-white md:text-sm text-xs rounded-md bg-cta hover:bg-cta/95 transition-all hover:shadow-md ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
