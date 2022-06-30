import React from 'react';
import { Search } from '../Filters/Search';

import styles from './Filters.module.css';

export const Filters = () => {
    return (
        <div className={styles.filtersBox}>
            <div className={styles.filters}>
                <h2 className={styles.title}>Czego szukasz?</h2>
                <div className={styles.filter}>
                    <Search/>
                </div>
            </div>
        </div>
    );
};