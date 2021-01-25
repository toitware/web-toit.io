import Termynal from "@jstroem/termynal";
import { makeStyles } from "@material-ui/core";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import React, { useEffect, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import useInView from "react-cool-inview";
require("../assets/code_mirror/toit");

interface EditorState {
  Animate: boolean;
  EditorContent: string;
}

const useStyles = makeStyles(() => ({
  main: {
    width: "50%",
  },
}));

const editorContent = "import gpio\nmain:\n\tpin := gpio.Pin.out 21\n\tpin.set 1\n\tsleep --ms=1000";

function animateEditor(editorContent: string): (state: EditorState) => EditorState | undefined {
  const animationState = {
    editorContentIndex: 0,
    lineWait: 0,
  };
  // console.log("Termynal", Termynal);
  const termynal = new Termynal("#termynal", {
    startOnInit: false,
  });
  return (state: EditorState): EditorState | undefined => {
    if (!state.Animate) {
      return state;
    }
    while (animationState.editorContentIndex < editorContent.length) {
      if (editorContent[animationState.editorContentIndex] == "\n") {
        if (animationState.lineWait < 5) {
          animationState.lineWait++;
          return state;
        }
        animationState.lineWait = 0;
      }
      animationState.editorContentIndex = animationState.editorContentIndex + 1;
      return { ...state, EditorContent: editorContent.substr(0, animationState.editorContentIndex) };
    }

    console.log(termynal);
    termynal.start();

    return undefined;
  };
}

export default function Editor(): JSX.Element {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.25,
  });

  const [state, setState] = useState<EditorState>({
    EditorContent: "",
    Animate: inView,
  });

  const classes = useStyles();

  if (inView && !state.Animate) {
    setState({ ...state, Animate: true });
  }

  useEffect(() => {
    const animateFn = animateEditor(editorContent);
    const interval = setInterval(() => {
      setState(
        (state: EditorState): EditorState => {
          const res = animateFn(state);
          if (res === undefined) {
            clearInterval(interval);
            return state;
          }
          return res;
        }
      );
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="codeSample">
      <div className="editor">
        <CodeMirror
          value={state.EditorContent}
          options={{
            mode: "toit",
            lineNumbers: true,
            styleActiveLine: true,
            theme: "material",
            readOnly: true,
            autoScroll: false,
          }}
        />
      </div>
      <div className="terminal">
        <div id="termynal">
          <span data-ty="input">toit device run hello.toit</span>
        </div>
      </div>
    </div>
  );
}
