import React from "react";
import type { InputProps } from "../../types";

const Radio = ({
  wrapperClassName = "relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600",
  titleClassName = "absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900",
  inputClassName = "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300",
  labelClassName = "ml-3 block text-sm font-medium text-gray-700",
  options = [],
  ...props
}: InputProps) => {
  return (
    <fieldset className={wrapperClassName}>
      <legend className={titleClassName}>{props.label}</legend>
      <div className="mt-4 space-y-4">
        {options &&
          options.map((v) =>
            v.component ? (
              v.component
            ) : (
              <div className="flex items-center">
                <input
                  id={v.key}
                  name={props.name}
                  type="radio"
                  className={inputClassName}
                  value={v.value}
                />
                <label htmlFor={v.key} className={labelClassName}>
                  {v.title}
                </label>
              </div>
            ),
          )}
      </div>
    </fieldset>
  );
};

export default Radio;
