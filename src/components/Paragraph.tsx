import React from "react";
import type { StaticProps } from "../../types";

const Paragraph = ({
  wrapperClassName = "",
  contentClassName = "mt-2 text-gray-700",
  ...props
}: StaticProps) => {
  return (
    <div className={wrapperClassName}>
      <p className={contentClassName}>{props.content}</p>
    </div>
  );
};

export default Paragraph;
