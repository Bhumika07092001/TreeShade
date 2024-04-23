import React, { useRef, useState } from "react";
import "./App.css";
import { jsPDF } from "jspdf";
import JoditEditor from "jodit-react";

function TextEditor() {
  const Ref = useRef(null);
  const [text, setText] = useState("");
  const [marginLeft, setMarginLeft] = useState(10);
  const [marginTop, setMarginTop] = useState(10);
  const [marginRight, setMarginRight] = useState(10);
  const [marginBottom, setMarginBottom] = useState(10);
  const config = {
    buttons: ["bold", "italic", "underline"],
  };

  const handleDownload = () => {
    const x = marginLeft;
    const y = marginTop + 10;
    const doc = new jsPDF();
    const content = Ref.current.value;
    const plainText = new DOMParser().parseFromString(content, "text/html")
      .documentElement.textContent;
    doc.text(plainText, x, y);
    doc.save("download.pdf");
  };

  return (
    <div>
      <JoditEditor
        ref={Ref}
        value={text}
        config={config}
        onBlur={(newcontent) => setText(newcontent)}
      />
      <div className="margin-inputs">
        <label>Left Margin:</label>
        <input
          type="number"
          value={marginLeft}
          onChange={(e) => setMarginLeft(parseInt(e.target.value))}
        />
        <label>Top Margin:</label>
        <input
          type="number"
          value={marginTop}
          onChange={(e) => setMarginTop(parseInt(e.target.value))}
        />
      </div>
      {/* <div className="format-options">
        <button onClick={() => document.execCommand("bold", false, null)}>
          Bold
        </button>
        <button onClick={() => document.execCommand("italic", false, null)}>
          Italic
        </button>
        <button onClick={() => document.execCommand("underline", false, null)}>
          Underline
        </button>
      </div> */}
      <button className="download-btn" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
}

export default TextEditor;
