/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_GITHUB_TOKEN
  }
  
interface ImportMeta {
readonly env: ImportMetaEnv
}