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
    <div className="flex p-10 space-x-5 bg-gray-200">
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
      <div className="w-72 border-2 border-gray-300 border-dashed rounded-md">
        <h2 className="font-bold text-center p-2">Inputs</h2>
        <div className="space-y-2">
          <div onClick={() => add("TEXT")}>Text</div>
          <div onClick={() => add("TEXT_AREA")}>Text area</div>
          <div onClick={() => add("SINGLE_SELECT")}>Single Select</div>
          <div onClick={() => add("MULTIPLE_SELECT")}>Multiple Select</div>
          <div onClick={() => add("CHECKBOX")}>Checkbox</div>
          <div onClick={() => add("RADIO")}>Radio</div>
          <div onClick={() => add("HEADING")}>Heading</div>
          <div onClick={() => add("PARAGRAPH")}>Paragraph</div>
          <div onClick={() => add("IMAGE")}>Image</div>
          <div onClick={() => add("DIVIDER")}>Divider</div>
          <div onClick={() => add("FILE")}>File</div>
        </div>
      </div>
    </div>
  );
}

export default App;
