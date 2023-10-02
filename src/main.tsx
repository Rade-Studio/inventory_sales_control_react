import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Utilities/components/navbar";
import "./index.css";
import App from "./Components/App";
import SideBar from "./Utilities/components/SideBar";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <SideBar SideBar></SideBar>
      <Navbar></Navbar>
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
