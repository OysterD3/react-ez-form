import React from "react";
import type { StaticProps } from "../../types";

const Divider = ({
  contentClassName = "px-2 bg-white text-sm text-gray-500",
  ...props
}: StaticProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      {props.content && (
        <div className="relative flex justify-center">
          <span className={contentClassName}>{props.content}</span>
        </div>
      )}
    </div>
  );
};

export default Divider;
