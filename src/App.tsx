import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SearchContext } from './contexts/search.context';
import { Header } from './components/layout/Header/Header';
import { MainView } from './views/MainView';
import { AddFormView } from './views/AddFormView';
import { SingleCarView } from './views/SingleCarView';
import { NotFoundView } from './views/NotFoundView';

export const App = () => {
    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Header/>
            <Routes>
                <Route path="/" element={<MainView/>}/>
                <Route path="/add" element={<AddFormView/>}/>
                <Route path="/car/:id" element={<SingleCarView/>}/>
                <Route path="/*" element={<NotFoundView/>}/>
            </Routes>
        </SearchContext.Provider>
    );
};

