import type React from "react";

export type InputElement =
  | "TEXT"
  | "TEXT_AREA"
  | "SINGLE_SELECT"
  | "MULTIPLE_SELECT"
  | "CHECKBOX"
  | "RADIO"
  | "HEADING"
  | "PARAGRAPH"
  | "IMAGE"
  | "DIVIDER"
  | "FILE";

export type InputOptions = {
  key: string;
  title: string;
  value: any;
  disabled?: boolean;
  component?: React.FunctionComponent;
};

export type ValidationRules = {
  key: string;
  name: string;
  rule: string;
};

export type BaseProps = {
  key: string;
  element: InputElement;
};

export type StaticProps = {
  content?: string;
  isStatic: true;
  wrapperClassName?: string;
  contentClassName?: string;
};

export type ImageProp = {
  alt: string;
} & StaticProps;

export type InputProps = {
  label: string;
  name: string;
  isStatic: false;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  titleClassName?: string;
  placeholder?: string;
  required: boolean;
  value?: any | any[];
  options?: InputOptions[];
  validations?: ValidationRules[];
};

export type EzFormJSON = BaseProps & (StaticProps | InputProps | ImageProp);
