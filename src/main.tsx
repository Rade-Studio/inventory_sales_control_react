import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "Components/App";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App></App>
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
