import { nanoid } from "nanoid";
import React from "react";
import type { InputProps } from "../../types";

const Checkbox = ({
  wrapperClassName = "space-y-5 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600",
  titleClassName = "absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900",
  inputClassName = "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded",
  labelClassName = "font-medium text-gray-700",
  options = [{ key: nanoid(), title: "Option 1", value: "option_one" }],
  ...props
}: InputProps) => {
  return (
    <fieldset className={wrapperClassName}>
      <legend className={titleClassName}>{props.label}</legend>
      {options &&
        options.map((v) =>
          v.component ? (
            v.component
          ) : (
            <div className="relative flex items-start" key={v.key}>
              <div className="flex items-center h-5">
                <input
                  id={v.value}
                  aria-describedby="comments-description"
                  name={props.name}
                  value={v.value}
                  type="checkbox"
                  className={inputClassName}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor={v.value} className={labelClassName}>
                  {v.title}
                </label>
              </div>
            </div>
          ),
        )}
    </fieldset>
  );
};

export default Checkbox;
