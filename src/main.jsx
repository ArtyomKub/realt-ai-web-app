import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import BackgroundModel from "./components/BackgroundModel/BackgroundModel.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <BackgroundModel/>
            <App/>
        </Router>
    </React.StrictMode>,
)
