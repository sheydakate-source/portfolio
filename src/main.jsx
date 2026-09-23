import { StrictMode } from 'react' //React development tool to detect problems
import { createRoot } from 'react-dom/client' //R DOM function - creates a root for rendering components in browser
import './index.css' //Loads global CSS styles
import App from './App.jsx' //my main Rcomponent, defined in App.jsx
import { BrowserRouter } from 'react-router-dom'

/*
  document -> webpage loaded in browser
  getElementById('root') -> searches the HTML doc for an element whose id is root
 */
createRoot(document.getElementById('root')).render(
 //tells react what to display
  <StrictMode>
    <BrowserRouter  basename="/portfolio">
        <App />
    </BrowserRouter>
  </StrictMode>,
)
