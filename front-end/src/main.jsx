import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Theme} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { BrowserRouter } from 'react-router-dom';


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Theme>
    <App />
     </Theme>
     </BrowserRouter>
  </StrictMode>
);
