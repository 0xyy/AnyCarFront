import React, { useEffect, useState } from 'react';
import { Btn } from '../../UI/Btn';
import { separateNumber } from '../../../utils/separate-number';
import { apiUrl } from '../../../config/api';

import styles from './CarCard.module.css';

interface Props {
    id: string;
    adName: string;
    price: number;
}

export const CarCard = ({id, adName, price}: Props) => {
    const [fileName, setFileName] = useState<string>('');

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/image/${id}`);
            const data = await res.json();

            setFileName(data);
        })();
    }, []);

    return (
        <div className={styles.card}>
            <img src={`${apiUrl}/images/${fileName}`} alt={adName}/>
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
};
