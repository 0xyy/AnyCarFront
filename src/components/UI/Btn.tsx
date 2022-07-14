import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Btn.module.css';

interface Props {
    text: string;
    className?: string;
    to?: string;
    btnStyle?: boolean;
}

export const Btn = ({text, className, to, btnStyle}: Props) => (
    to
        ? <Link className={`${btnStyle ? styles.btn : styles.link} ${className}`} to={to}>{text}</Link>
        : <button className={`${styles.btn} ${className}`}>{text}</button>
);