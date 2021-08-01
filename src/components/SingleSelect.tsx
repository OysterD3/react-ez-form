import React, { useState } from "react";
import type { InputProps } from "../../types";
import { Transition } from "headlessui-react-shake";

const SingleSelect = ({
  wrapperClassName = "relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600",
  labelClassName = "absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900",
  options = [],
  ...props
}: InputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const getTitle = () => {
    const placeholder = props.placeholder || "";
    if (props.value) {
      return (
        options?.find((v) => v.value === props.value)?.title || placeholder
      );
    }
    return placeholder;
  };

  return (
    <div
      className={wrapperClassName}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <label id={props.name} className={labelClassName}>
        {props.label}
      </label>
      <div className="mt-1 relative">
        <button
          type="button"
          className="bg-white relative w-full rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={props.name}
        >
          <span className="block truncate">{getTitle()}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <Transition
          show={isOpen}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby={props.name}
          >
            {options && options.length > 0 ? (
              options.map((v) =>
                v.component ? (
                  v.component
                ) : (
                  <li
                    key={v.value}
                    className={`${
                      v.value === props.value
                        ? "text-white bg-indigo-600"
                        : "text-gray-900"
                    } cursor-default select-none relative py-2 pl-3 pr-9`}
                    role="option"
                  >
                    <span
                      className={`${
                        v.value === props.value
                          ? "font-semibold"
                          : "font-normal"
                      } block truncate`}
                    >
                      {v.title}
                    </span>

                    {props.value === v.value && (
                      <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </li>
                ),
              )
            ) : (
              <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                <span className="font-normal block truncate">No data</span>
              </li>
            )}
          </ul>
        </Transition>
      </div>
    </div>
  );
};

export default SingleSelect;
