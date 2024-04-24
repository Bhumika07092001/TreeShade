import React from "react";
import { useRef, useState } from "react";
import "./App.css";
import JoditEditor from "jodit-react";

function TextEditor() {
  const Ref = useRef(null);
  const [text, setText] = useState("");
  const config = {
    buttons: ["bold", "italic", "underline", "print"],
  };

  return (
    <div>
      <JoditEditor
        ref={Ref}
        value={text}
        config={config}
        onBlur={(newcontent) => setText(newcontent)}
      />
    </div>
  );
}

export default TextEditor;
