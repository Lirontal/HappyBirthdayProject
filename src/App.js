import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Birthday from './components/Birthday/Birthday';
import TimeCounter from './components/Birthday/TimeCounter/TimeCounter';

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route exact path='/'  element={<TimeCounter />} />
                    <Route exact path='/today'  element={<Birthday />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
