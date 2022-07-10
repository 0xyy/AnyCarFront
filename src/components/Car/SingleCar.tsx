import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Btn } from '../UI/Btn';
import { CarEntity } from 'types';

import styles from './SingleCar.module.css';
import { separateNumber } from '../../utils/separate-number';

export const SingleCar = () => {
    const {id} = useParams();
    const [car, setCar] = useState<CarEntity | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/api/car/${id}`);
            const data: CarEntity = await res.json();

            setCar(data);
        })();
    }, []);

    if (car === null) {
        return <h1>Wczytywanie oferty samochodowej...</h1>;
    }

    const {
        brand,
        model,
        adName,
        price,
        yearOfProduction,
        kilometrage,
        hp,
        fuel,
        gearbox,
        bodyType,
        color,
        accidentFree,
        description,
        createdAt,
    } = car;

    return (
        <div className={styles.singleCarBox}>
            <div className={styles.singleCar}>
                <div className={styles.goBack}>
                    <Btn to="/" text="Wróć na stronę główną"/>
                </div>
                <div className={styles.section}>
                    <div className={styles.imgBox}>
                        <img
                            src=""
                            alt={adName}/>
                    </div>
                    <div className={styles.adName}>
                        <h4>{adName}</h4>
                        <p>{yearOfProduction} ● {separateNumber(kilometrage)} km ● {fuel} ● {bodyType}</p>
                        <h2>{separateNumber(price)} <sub>PLN</sub></h2>
                        <h3>Opis</h3>
                        <p>{!!description ? description : 'Brak opisu dla tej oferty samochodowej.'}</p>
                    </div>
                </div>
                <div className={styles.carInfo}>
                    <div className={styles.createdAt}>
                        <p>ID: <span>{id}</span> Data dodania: <span>{new Date(createdAt).toLocaleString()}</span></p>
                    </div>
                    <h3>Szczegóły</h3>
                    <div className={styles.listInfo}>
                        <ul className={styles.sectionOne}>
                            <li><span>Marka pojazdu:</span> {brand}</li>
                            <li><span>Model pojazdu:</span> {model}</li>
                            <li><span>Rok produkcji:</span> {yearOfProduction}</li>
                            <li><span>Przebieg:</span> {separateNumber(kilometrage)} km</li>
                            <li><span>Rodzaj paliwa:</span> {fuel}</li>
                        </ul>
                        <ul className={styles.sectionTwo}>
                            <li><span>Moc:</span> {hp} KM</li>
                            <li><span>Skrzynia biegów:</span> {gearbox}</li>
                            <li><span>Typ nadwozia:</span> {bodyType}</li>
                            <li><span>Kolor:</span> {color}</li>
                            <li><span>Bezwypadkowy:</span> {accidentFree ? 'Tak' : 'Nie'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};