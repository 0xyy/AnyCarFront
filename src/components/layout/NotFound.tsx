import React from 'react';
import { Btn } from '../UI/Btn';

import styles from './NotFound.module.css';

export const NotFound = () => (
    <div className={styles.notFound}>
        <h1>Ups! Zabrakło nam paliwa...</h1>
        <p>Przepraszamy, ale nie znaleziono strony o podanym adresie. <Btn to="/" text="Wróć na stronę główną."/></p>
    </div>
);