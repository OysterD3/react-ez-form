import React from "react";
import type { ImageProp } from "../../types";

const Image = ({
  wrapperClassName = "",
  contentClassName = "h-52 w-96",
  ...props
}: ImageProp) => {
  return (
    <div className={wrapperClassName}>
      <img src={props.content} className={contentClassName} alt={props.alt} />
    </div>
  );
};

export default Image;
