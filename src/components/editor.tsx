import React from "react";
import {UnControlled as  CodeMirror} from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";


require("../assets/code_mirror/toit");

export default function Editor(): JSX.Element {
    let content = "import gpio\nmain:\npin := gpio.Pin.out 21\npin.set 1\nsleep --ms=1000"
    const options = {
        mode: "toit",
        lineNumbers: true,
        styleActiveLine: true,
        theme: "material",
        readOnly: true,
      };
    return (
        <CodeMirror
              value={content}
              options={options}
            />
    );
}
