import * as React from "react";
import SignUpDialog from "./sign-up-dialog";
import useLocationMapping, { locationIncludesSignUp } from "./use-location-mapping";

export type Action = "open" | "close" | "sent";
export type Dispatch = (action: Action) => void;
export type State = { open: boolean; sentSuccessfully: boolean };

export type ContextValue = {
  state: State;
  dispatch: Dispatch;
};

const SignUpContext = React.createContext<ContextValue | undefined>(undefined);

function signUpReducer(state: State, action: Action): State {
  switch (action) {
    case "open":
      return {
        open: true,
        // When the form was closed, we want to reset the "sentSuccessfully" flag
        // so that the form (and not the success message) is shown when the dialog
        // appears.
        sentSuccessfully: !state.open ? false : state.sentSuccessfully,
      };
    case "close":
      return { ...state, open: false };
    default:
      throw Error(`Unknown action ${action}`);
  }
}

type SignUpProviderProps = { children: React.ReactNode };

/**
 * The provider for the context that manages whether the sign up form is visible or not.
 *
 * This provider should only be used once in the app.
 */
export function SignUpProvider({ children }: SignUpProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer(signUpReducer, {
    open: locationIncludesSignUp(),
    sentSuccessfully: false,
  });

  useLocationMapping(state, dispatch);

  const value: ContextValue = { state, dispatch };
  return (
    <SignUpContext.Provider value={value}>
      {children}
      <SignUpDialog />
    </SignUpContext.Provider>
  );
}

export function useSignUp(): ContextValue {
  const context = React.useContext(SignUpContext);
  if (context === undefined) {
    throw new Error("useSignUp must be used within a SignUpProvider");
  }
  return context;
}
