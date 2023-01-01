import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Birthday from './components/Birthday/Birthday';
import CarouselPage from './components/CarouselPage/CarouselPage';
import FamilyCollage from './components/FamilyCollage/FamilyCollage';
import LironVideo from './components/LironVideo/LironVideo';
import Menu from './components/Menu/Menu';
import SoundIcon from "./components/SoundIcon/SoundIcon";
import TimeCounter from './components/Birthday/TimeCounter/TimeCounter';

function App() {
    return (
        <BrowserRouter className="App">
            <SoundIcon />
            <Routes>
                <Route exact path='/' element={<TimeCounter />} />
                <Route exact path='/today' element={<Birthday />} />
                <Route exact path='/carousel' element={<CarouselPage />} />
                <Route exact path='/familyCollage' element={<FamilyCollage />} />
                <Route exact path='/lironVideo' element={<LironVideo />} />
                <Route exact path='/menu' element={<Menu />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
