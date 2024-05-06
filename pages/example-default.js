import React, { useState } from "react";

// react-pintura
import { PinturaEditor } from "@pqina/react-pintura";

// pintura
import { pintura } from "@pqina/pintura/pintura.module.css";
import { index as pinturaTheme } from "./index.module.css";
import { getEditorDefaults } from "@pqina/pintura";

// get default properties
const editorDefaults = getEditorDefaults({
  stickers: ["😎", "sticker-one.svg", "sticker-two.svg", "sticker-three.svg"],
});

export default function ExampleDefault() {
  // inline result
  const [result, setResult] = useState("");

  return (
    <div>
      <h2>Defaults</h2>

      <div style={{ height: "70vh" }}>
        <PinturaEditor
          {...editorDefaults}
          className={`${pintura} ${pinturaTheme}`}
          src={"./image.jpeg"}
          imageCropAspectRatio={1}
          onLoad={(res) => console.log("load image", res)}
          onProcess={({ dest }) => setResult(URL.createObjectURL(dest))}
        />
      </div>

      {!!result.length && (
        <p>
          <img src={result} alt="" />
        </p>
      )}
    </div>
  );
}
