import React from 'react';
import { Btn } from '../UI/Btn';

import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.headerBox}>
            <div className={styles.header}>
                <h1>ANYCAR!</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Znajdź swój wymarozny samochód"
                    />
                    <Btn className={styles.button} text="Szukaj"/>
                </form>
            </div>
        </header>
    )
};