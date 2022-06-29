import React from 'react';
import { Btn } from '../UI/Btn';

import styles from './Banner.module.css';
import backgroundImg from '../../assets/car-background.png';

export const Banner = () => {
    return <>
        <div className={styles.bannerBox} style={{backgroundImage: `url(${backgroundImg})`}}>
            <div className={styles.dimness}/>
            <div className={styles.banner}>
                <h1>Znajdziesz tu każdy<br/>samochód którego szukasz.</h1>
                <Btn className={styles.button} text="Dodaj ogłoszenie"/>
            </div>
        </div>
    </>;
};