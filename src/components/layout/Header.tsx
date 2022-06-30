import React from 'react';

import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.headerBox}>
            <div className={styles.header}>
                <h1 className={styles.logo}>ANYCAR!</h1>
            </div>
        </header>
    );
};