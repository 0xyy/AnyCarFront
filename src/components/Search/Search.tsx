import React, { SyntheticEvent, useContext, useState } from 'react';
import { SearchContext } from '../../contexts/search.context';
import { Btn } from '../UI/Btn';

import styles from './Search.module.css';

export const Search = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const handleFormSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
        setInputVal('');
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Znajdź swój wymarozny samochód"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
            />
            <Btn className={styles.button} text="Szukaj"/>
        </form>
    );
};