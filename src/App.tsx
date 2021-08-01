import React, { useState } from "react";
import type {
  EzFormJSON,
  ImageProp,
  InputElement,
  InputProps,
  StaticProps,
} from "../types";
import { nanoid } from "nanoid";
import Checkbox from "./components/Checkbox";
import Divider from "./components/Divider";
import File from "./components/File";
import Image from "./components/Image";
import Paragraph from "./components/Paragraph";
import Heading from "./components/Heading";
import InputText from "./components/InputText";
import InputTextarea from "./components/InputTextarea";
import MultiSelect from "./components/MultiSelect";
import Radio from "./components/Radio";
import SingleSelect from "./components/SingleSelect";

function App() {
  const [elements, setElements] = useState<EzFormJSON[]>([]);

  const add = (el: InputElement) => {
    if (el === "TEXT") {
      setElements([
        ...elements,
        {
          key: nanoid(),
          element: el,
          label: "Text",
          name: `text_${nanoid(15)}`,
          required: false,
          isStatic: false,
        },
      ]);
    } else if (el === "TEXT_AREA") {
      setElements([
        ...elements,
        {
          key: nanoid(),
          element: el,
          label: "Text area",
          name: `textarea_${nanoid(15)}`,
          required: false,
          isStatic: false,
        },
      ]);
    } else if (el === "SINGLE_SELECT") {
      setElements([
        ...elements,
        {
          key: nanoid(),
          element: el,
          label: "Single Select",
          name: `select_${nanoid(15)}`,
          required: false,
          isStatic: false,
          options: [],
        },
      ]);
    } else if (el === "MULTIPLE_SELECT") {
      setElements([
        ...elements,
        {
          key: nanoid(),
          element: el,
          label: "Multiple Select",
          name: `multi_select_${nanoid(15)}`,
          required: false,
          isStatic: false,
          options: [],
        },
      ]);
    } else if (el === "CHECKBOX") {
      setElements([
        ...elements,
        {
          key: nanoid(),
          element: el,
          label: "Checkbox",
          name: `checkbox_${nanoid(15)}`,
          required: false,
          isStatic: false,
          options: [{ key: nanoid(), title: "Option 1", value: "option_one" }],
        },
      ]);
    } else if (el === "RADIO") {
      setElements([
        ...elements,
        {
          key: nanoid(),
          element: el,
          label: "Radio",
          name: `radio_${nanoid(15)}`,
          required: false,
          isStatic: false,
          options: [{ key: nanoid(), title: "Option 1", value: "option_one" }],
        },
      ]);
    } else if (el === "HEADING") {
      setElements([
        ...elements,
        {
          key: nanoid(),
          element: el,
          isStatic: true,
          content: "Heading",
        },
      ]);
    } else if (el === "PARAGRAPH") {
      setElements([
        ...elements,
        {
          key: nanoid(),
          element: el,
          isStatic: true,
          content: "Paragraph",
        },
      ]);
    } else if (el === "IMAGE") {
      setElements([
        ...elements,
        {
          key: nanoid(),
          element: el,
          isStatic: true,
          content: "https://source.unsplash.com/386x208/?nature",
          alt: nanoid(),
        },
      ]);
    } else if (el === "DIVIDER") {
      setElements([
        ...elements,
        {
          key: nanoid(),
          element: el,
          isStatic: true,
        },
      ]);
    } else if (el === "FILE") {
      setElements([
        ...elements,
        {
          key: nanoid(),
          element: el,
          label: "File",
          name: `file_${nanoid(15)}`,
          required: false,
          isStatic: false,
        },
      ]);
    }
  };

  return (
    <div className="flex p-10 space-x-5 bg-gray-200 min-h-screen">
      <div className="flex-1 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1">
          {elements.map((v, idx) => {
            return (
              <div key={idx} className="pb-4 px-4 pt-10 bg-white">
                {v.element === "TEXT" && <InputText {...(v as InputProps)} />}
                {v.element === "TEXT_AREA" && (
                  <InputTextarea {...(v as InputProps)} />
                )}
                {v.element === "SINGLE_SELECT" && (
                  <SingleSelect {...(v as InputProps)} />
                )}
                {v.element === "MULTIPLE_SELECT" && (
                  <MultiSelect {...(v as InputProps)} />
                )}
                {v.element === "CHECKBOX" && (
                  <Checkbox {...(v as InputProps)} />
                )}
                {v.element === "RADIO" && <Radio {...(v as InputProps)} />}
                {v.element === "HEADING" && <Heading {...(v as StaticProps)} />}
                {v.element === "PARAGRAPH" && (
                  <Paragraph {...(v as StaticProps)} />
                )}
                {v.element === "IMAGE" && <Image {...(v as ImageProp)} />}
                {v.element === "DIVIDER" && <Divider {...(v as StaticProps)} />}
                {v.element === "FILE" && <File {...(v as InputProps)} />}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-72">
        <h2 className="font-bold text-center p-2">Inputs</h2>
        <div className="space-y-2">
          <div
            className="p-2 cursor-pointer bg-white flex items-center"
            onClick={() => add("TEXT")}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Text
          </div>
          <div
            className="p-2 cursor-pointer bg-white flex items-center"
            onClick={() => add("TEXT_AREA")}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Text area
          </div>
          <div
            className="p-2 cursor-pointer bg-white flex items-center"
            onClick={() => add("SINGLE_SELECT")}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Single Select
          </div>
          <div
            className="p-2 cursor-pointer bg-white flex items-center"
            onClick={() => add("MULTIPLE_SELECT")}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Multiple Select
          </div>
          <div
            className="p-2 cursor-pointer bg-white flex items-center"
            onClick={() => add("CHECKBOX")}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Checkbox
          </div>
          <div
            className="p-2 cursor-pointer bg-white flex items-center"
            onClick={() => add("RADIO")}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
            Radio
          </div>
          <div
            className="p-2 cursor-pointer bg-white flex items-center"
            onClick={() => add("HEADING")}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Heading
          </div>
          <div
            className="p-2 cursor-pointer bg-white flex items-center"
            onClick={() => add("PARAGRAPH")}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Paragraph
          </div>
          <div
            className="p-2 cursor-pointer bg-white flex items-center"
            onClick={() => add("IMAGE")}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            Image
          </div>
          <div
            className="p-2 cursor-pointer bg-white flex items-center"
            onClick={() => add("DIVIDER")}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
            Divider
          </div>
          <div
            className="p-2 cursor-pointer bg-white flex items-center"
            onClick={() => add("FILE")}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
              <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
            </svg>
            File
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
