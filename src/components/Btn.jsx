import React from "react";

const Btn = (props) => {
  const { caption, type } = props;
  const btnType = {
    primary:
      "p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80 text-white text-xl",
    secondary:
      "p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80 text-white text-xl",
  };
  return (
    <a href="/somewhere" className={btnType[type]}>
      {caption}
    </a>
  );
};

export default Btn;
