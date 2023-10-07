import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "@/App";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/Utilities";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App></App>
    </ThemeProvider>
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
