// src/global.d.ts (or any suitable location in your project)
export {};

declare global {
  interface Window {
    A: any; // Use more specific type if possible, otherwise 'any' will work
  }
}
