import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { MainView } from './views/MainView';
import { AddFormView } from './views/AddFormView';
import { NotFoundView } from './views/NotFoundView';

export const App = () => {
    return <>
        <Header/>
        <Routes>
            <Route path="/" element={<MainView/>}/>
            <Route path="/add" element={<AddFormView/>}/>
            <Route path="/*" element={<NotFoundView/>}/>
        </Routes>
    </>;
};

