import React from "react";
import { nanoid } from "nanoid";
import type { InputProps } from "../../types";

const InputText = ({
  wrapperClassName = "relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600",
  labelClassName = "absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900",
  inputClassName = "block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm",
  ...props
}: InputProps) => {
  const uid = nanoid(10);
  return (
    <div className={wrapperClassName}>
      <label htmlFor={`text_${uid}`} className={labelClassName}>
        {props.label}
      </label>
      <input
        type="text"
        name={props.name}
        id={`text_${uid}`}
        className={inputClassName}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputText;
