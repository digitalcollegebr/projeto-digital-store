import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Rotas from "./Routes.jsx";
import './src/styles/index.css';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Rotas/>
    </BrowserRouter>
)
