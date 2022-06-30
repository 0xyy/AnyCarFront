import React from 'react';
import { Btn } from '../UI/Btn';

import styles from './Search.module.css';

export const Search = () => {
    return (
        <form>
            <input
                type="text"
                placeholder="Znajdź swój wymarozny samochód"
            />
            <Btn className={styles.button} text="Szukaj"/>
        </form>
    );
};