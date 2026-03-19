/// <reference types="vite/client" />

declare module '*?format=webp&w=*' {
  const src: string;
  export default src;
}

declare module '*?format=webp' {
  const src: string;
  export default src;
}

declare module '*?format=webp&as=picture' {
  const sources: { src: string; type: string }[];
  export default sources;
}
