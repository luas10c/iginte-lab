/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHCMS_API_URL: string
  readonly VITE_GRAPHCMS_ACCESS_TOKEN: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}