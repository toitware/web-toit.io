import { useEffect, useRef } from "react";
import { Dispatch, State } from "./context";

/**
 *  Makes sure that the Location always reflects the state and vice versa.
 */
export function useLocationMapping(state: State, dispatch: Dispatch): void {
  // Update the URL to reflect the current sign up dialog state.
  useEffect(() => {
    const hashIncludesSignUp = locationIncludesSignUp();
    if ((state.open && !hashIncludesSignUp) || (!state.open && hashIncludesSignUp)) {
      // Properly push the URL state when opening the sign up form.
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search + (state.open ? "#sign-up" : "")
      );
    }
  }, [state]);

  // Update the state to reflect the URL.
  const stateRef = useRef<State>(state);
  stateRef.current = state;
  useLocationPoppedState(() => {
    const locationToSignUp = locationIncludesSignUp();
    if (locationToSignUp && !stateRef.current.open) {
      dispatch("open");
    } else if (!locationToSignUp && stateRef.current.open) {
      dispatch("close");
    }
  });
}

export function locationIncludesSignUp(): boolean {
  return typeof window !== "undefined" ? window.location.hash.includes("sign-up") : false;
}

/**
 *  Invokes the effect callback whenever the location was popped.
 */
function useLocationPoppedState(effect: React.EffectCallback): void {
  const effectRef = useRef(effect);
  effectRef.current = effect;

  useEffect(() => {
    const effect = () => effectRef.current();
    window.addEventListener("popstate", effect);
    return () => {
      window.removeEventListener("popstate", effect);
    };
  }, []);
}

export default useLocationMapping;
