import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainView } from './views/MainView';
import { AddFormView } from './views/AddFormView';
import { Header } from './components/layout/Header';

export const App = () => {
    return <>
        <Header/>
        <Routes>
            <Route path="/" element={<MainView/>}/>
            <Route path="/add" element={<AddFormView/>}/>
        </Routes>
    </>;
};

