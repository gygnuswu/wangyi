/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineCompoment } from "vue"
  const component: DefineCompoment<{}, {}, any>
  export default component
}