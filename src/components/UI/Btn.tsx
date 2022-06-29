import React from 'react';

import styles from './Btn.module.css';

interface Props {
    text: string;
    className?: string;
}

export const Btn = ({text, className}: Props) => {
    return <button className={`${styles.btn} ${className}`}>{text}</button>;
}