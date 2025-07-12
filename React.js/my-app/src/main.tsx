import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  './tailwind.css';
import App from './App.tsx'
import './App.css';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
					<App />
			</Theme>
    

  </StrictMode>,
)
