/// <reference types="@svg-use/vite/client" />

declare module '*.svg' {
  const content: string;
  export default content;
}
