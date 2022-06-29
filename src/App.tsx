import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Banner } from './components/layout/Banner';
import { AddForm } from './components/AddForm/AddForm';

export const App = () => {
    return <>
        <Header/>
        <Banner/>
        {/*<Routes>*/}
        {/*    <Route path="/add" element={<AddForm/>}/>*/}
        {/*</Routes>*/}
    </>;
};

