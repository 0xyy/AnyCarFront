import React from 'react';
import { Btn } from '../../UI/Btn';
import { separateNumber } from '../../../utils/separate-number';

import styles from './CarCard.module.css';

interface Props {
    id: string;
    adName: string;
    price: number;
}

export const CarCard = ({id, adName, price}: Props) => (
    <div className={styles.card}>
        <img src="https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjJpM2Z3OGNkeGNoOTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.-eOTyYf3ha_8pOh1eDJTXgD5OaAGFUXBGbXRkA50hD8/image;s=320x240" alt={adName}/>
        <div className={styles.description}>
            <div className={styles.adName}>
                <p>{adName}</p>
            </div>
            <div className={styles.buttonBox}>
                <h2>{separateNumber(price)}<sup>PLN</sup></h2>
                <Btn className={styles.button} to={`/car/${id}`} text="Zobacz więcej"/>
            </div>
        </div>
    </div>
);
