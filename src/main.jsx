import 'boxicons';
import 'primeicons/primeicons.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Global from './styles/global.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Global /> 
    <App />
  </>
)
