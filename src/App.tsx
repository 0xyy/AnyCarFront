import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AddForm } from './components/AddForm/AddForm';
import { MainView } from './views/MainView';

export const App = () => {
    return <>
        <Routes>
            <Route path="/" element={<MainView/>}/>
            <Route path="/add" element={<AddForm/>}/>
        </Routes>
    </>;
};

