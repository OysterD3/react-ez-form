import React from "react";
import type { StaticProps } from "../../types";

const Heading = ({
  wrapperClassName = "",
  contentClassName = "text-lg leading-6 font-medium text-gray-900",
  ...props
}: StaticProps) => {
  return (
    <div className={wrapperClassName}>
      <h3 className={contentClassName}>{props.content}</h3>
    </div>
  );
};

export default Heading;
