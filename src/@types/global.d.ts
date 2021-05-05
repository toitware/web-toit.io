export declare global {
  interface Window {
    rdt: (type: string, ...args: unknown[]) => void;
    redditSnippetLoader: (key: string, callback?: () => void) => void;
  }
}
