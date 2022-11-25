import classNames from "classnames";
import React from "react";
import { red } from "../utils";

function Button({ href, className, children }) {
  return (
    <a href={href}>
      <button
        className={classNames(
          "bg-[#D4494C] px-8 py-4 text-white text-sm rounded",
          className
        )}
      >
        {children}
      </button>
    </a>
  );
}

export default Button;
