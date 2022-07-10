import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../contexts/search.context';
import { Btn } from '../../UI/Btn';
import { CarCard } from './CarCard';
import { SimpleCarEntity } from 'types';

import styles from './Cars.module.css';

export const Cars = () => {
    const {search} = useContext(SearchContext);
    const [cars, setCars] = useState<SimpleCarEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/api/car/search/${search}`);
            const data: SimpleCarEntity[] = await res.json();

            setCars(data);
        })();
    }, [search]);

    if (cars.length === 0) {
        return <div className={styles.noCars}>
            <h1>Tylko nie to?! Ktoś widział nasze samochody?!</h1>
            <p>Aktualnie nie mamy żadnych ofert samochodowych. <Btn to="/add" text="Dodaj jąkąś furkę!"/></p>
        </div>;
    }

    return <>
        <div className={styles.carsBox}>
            <div className={styles.cars}>
                {
                    cars.map(car => (
                        <CarCard
                            key={car.id}
                            id={car.id}
                            adName={car.adName}
                            price={car.price}
                        />
                    ))
                }
            </div>
        </div>
    </>;
};