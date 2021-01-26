import { makeStyles } from "@material-ui/core";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import React, { useEffect, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import useInView from "react-cool-inview";
require("../assets/code_mirror/toit");

enum EditorMode {
  Insert = 1,
  Normal,
}

enum TerminalMode {
  Input = 1,
  Output,
}
interface TerminalLine {
  Type: TerminalMode;
  Content: string;
  Time?: string;
}

interface EditorState {
  Animate: boolean;
  EditorContent: string;
  EditorLines: number;
  EditorMode: EditorMode;
  TerminalContent: TerminalLine[];
}

const useStyles = makeStyles(() => ({
  main: {
    width: "50%",
  },
}));

const editorContent = "import gpio\nmain:\n\tpin := gpio.Pin.out 21\n\tpin.set 1\n\tsleep --ms=1000";
const TerminalContent: TerminalLine[] = [
  { Type: TerminalMode.Input, Content: "toit run main.toit" },
  { Type: TerminalMode.Output, Content: "<process initiated>", Time: "2021-01-26 09:48:19" },
  { Type: TerminalMode.Output, Content: "Hello, world!", Time: "2021-01-26 09:48:19" },
  { Type: TerminalMode.Output, Content: "<process terminated>", Time: "2021-01-26 09:48:19" },
];

function animateEditor(
  editorContent: string,
  terminalContent: TerminalLine[]
): (state: EditorState) => EditorState | undefined {
  const animationState = {
    editorContentIndex: 0,
    lineWait: 0,
    lines: 1,
    mode: EditorMode.Insert,
    terminalContentIndex: 0,
    terminalContentLines: 0,
  };
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
        animationState.lines++;
        animationState.lineWait = 0;
      }
      animationState.editorContentIndex = animationState.editorContentIndex + 1;
      return {
        ...state,
        EditorContent: editorContent.substr(0, animationState.editorContentIndex),
        EditorLines: animationState.lines,
        EditorMode: animationState.mode,
      };
    }

    animationState.mode = EditorMode.Normal;

    while (animationState.terminalContentLines < terminalContent.length) {
      if (animationState.lineWait < 5) {
        animationState.lineWait++;
        return state;
      }

      let line: TerminalLine = terminalContent[animationState.terminalContentLines];
      if (line.Type == TerminalMode.Input) {
        state.TerminalContent.pop()
        if (animationState.terminalContentIndex < line.Content.length) {
          animationState.terminalContentIndex++;
          line = {
            Type: TerminalMode.Input,
            Content: line.Content.substr(0, animationState.terminalContentIndex),
          };
          state.TerminalContent.push(line);
          return {
            ...state,
            EditorMode: animationState.mode,
          };
        } else {
        }
      }

      animationState.lineWait = 0;
      animationState.terminalContentIndex = 0;
      animationState.terminalContentLines++;
      state.TerminalContent.push(line);
      return {
        ...state,
        EditorMode: animationState.mode,
      };
    }

    return undefined;
  };
}

export default function Editor(): JSX.Element {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.25,
  });

  const [state, setState] = useState<EditorState>({
    Animate: inView,
    EditorContent: "",
    EditorLines: 1,
    EditorMode: EditorMode.Insert,
    TerminalContent: [],
  });

  const classes = useStyles();

  if (inView && !state.Animate) {
    setState({ ...state, Animate: true });
  }

  useEffect(() => {
    const animateFn = animateEditor(editorContent, TerminalContent);
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
    <div className="wrapper">
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
        <div className="process">
          <div className="left">
            <div className={state.EditorMode == EditorMode.Insert ? "mode mode-insert" : "mode mode-normal"}>
              {state.EditorMode == EditorMode.Insert ? "INSERT" : "NORMAL"}
            </div>
            <div className="filename">main.toit</div>
          </div>
          <div className="right">
            <div className="lines">
              {state.EditorLines}/{state.EditorLines}
            </div>
            <div className="view">100% ☰</div>
          </div>
        </div>
        <Terminal lines={state.TerminalContent} />
      </div>
    </div>
  );
}

interface TerminalProps {
  lines: TerminalLine[]
}

function Terminal({lines}: TerminalProps): JSX.Element {
  if (lines.length == 0) {
    return (
      <div className="terminal">
        <div className="line input"></div>
      </div>
    );
  }

  return (
    <div className="terminal">
      {lines.map((line, key) => {
        if (line.Type == TerminalMode.Input) {
          return <div className="line input" key={key}>{line.Content}</div>;
        } else {
          return <div className="line output" key={key}>
            {line.Time ? <span className="time">{line.Time}</span> : ""}
            {line.Content}
          </div>;
        }
      })}
    </div>
  );
}
