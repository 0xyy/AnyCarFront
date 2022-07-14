import React from 'react';
import { Btn } from '../../UI/Btn';

import styles from './Banner.module.css';
import backgroundImg from '../../../assets/car-background.png';

export const Banner = () => {
    return <>
        <div className={styles.bannerBox} style={{backgroundImage: `url(${backgroundImg})`}}>
            <div className={styles.dimness}/>
            <div className={styles.banner}>
                <h1 className={styles.title}>Samochody, które<br/>roztopią twoje uczucia.</h1>
                <Btn to="/add" className={styles.button} btnStyle text="Dodaj ogłoszenie"/>
            </div>
        </div>
    </>;
};