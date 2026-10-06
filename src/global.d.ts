export {};

declare global {
  interface WvcClient {
    [key: string]: any;
  }

  var wvcClient: WvcClient;

  interface Window {
    wvcClient?: WvcClient;
  }
}
