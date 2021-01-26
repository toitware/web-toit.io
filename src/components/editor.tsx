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
  Input = "Input",
  Output = "Output",
  Wait = "Wait",
}
interface TerminalLine {
  Type: TerminalMode;
  Content: string;
  Time?: string;
  Wait?: number;
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

interface AnimationState {
  editorContentIndex: number;
  lineWait: number;
  lines: number;
  mode: EditorMode;
  terminalContentIndex: number;
  terminalContentLines: number;
  lastWait?: Date;
}

function animateEditor(
  editorContent: string,
  terminalContent: TerminalLine[]
): (state: EditorState) => EditorState | undefined {
  const animationState: AnimationState = {
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
        state.TerminalContent.pop();
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
        }
      } else if (line.Type == TerminalMode.Wait && line.Wait) {
        if (animationState.lastWait === undefined) {
          animationState.lastWait = new Date();
          return state;
        } else {
          const now = new Date();
          if (now.getTime() - animationState.lastWait.getTime() < line.Wait) {
            return state;
          }
        }
        animationState.terminalContentLines++;
        animationState.lastWait = undefined;
        return state;
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

interface EditorProps {
  editor: string;
  terminal: TerminalLine[];
}

export default function Editor({ editor, terminal }: EditorProps): JSX.Element {
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
    const animateFn = animateEditor(editor, terminal);
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
  lines: TerminalLine[];
}

function Terminal({ lines }: TerminalProps): JSX.Element {
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
          return (
            <div className="line input" key={key}>
              {line.Content}
            </div>
          );
        } else if (line.Type == TerminalMode.Output) {
          return (
            <div className="line output" key={key}>
              {line.Time ? <span className="time">{line.Time}</span> : ""}
              {line.Content}
            </div>
          );
        } else {
          return undefined;
        }
      })}
    </div>
  );
}
