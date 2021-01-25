declare module "*.png";
declare module "*.jpg";

declare module "@jstroem/termynal" {
  interface TermynalOptions {
    prefix?: string;
    startDelay?: number;
    typeDelay?: number;
    lineDelay?: number;
    processLength?: number;
    processChar?: string;
    cursor?: string;
    noInit?: boolean;
    startOnInit?: boolean;
  }

  class Termynal {
    constructor(identifier: string, options: ?TermynalOptions);
    init(): void;
    start(): void;
  }

  export = Termynal;
}
