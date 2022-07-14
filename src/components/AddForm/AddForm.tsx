import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { Btn } from '../UI/Btn';
import { FuelTypes, GearboxTypes, BodyTypes } from 'types';
import { apiUrl } from '../../config/api';

import styles from './AddForm.module.css';

export const AddForm = () => {
    const [form, setForm] = useState({
        adName: '',
        brand: '',
        model: '',
        price: '',
        yearOfProduction: '',
        kilometrage: '',
        hp: '',
        color: '',
        fuel: FuelTypes.Petrol,
        gearbox: GearboxTypes.Manual,
        bodyType: BodyTypes.Coupe,
        accidentFree: 1,
        description: '',
    });
    const [file, setFile] = useState<string>('');
    const [fileName, setFileName] = useState<string>('');
    const [createdCarId, setCreatedCarId] = useState<string>('');

    const handleFormSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const res = await fetch(`${apiUrl}/car`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...form,
                accidentFree: !!form.accidentFree,
            }),
        });

        const id = await res.json();
        setCreatedCarId(id);
        setFileName(id);

        const formData = new FormData();
        formData.append('file', file);

        await axios.post(`${apiUrl}/image/upload/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    };

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const onFileChange = (e: any) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    if (createdCarId) {
        return <div className={styles.addedCar}>
            <h1>Dodane!</h1>
            <p><Btn to={`/car/${createdCarId}`} text="Zobacz twoje ogłoszenie"/> lub <Btn to="/" text="Wróć na stronę główną"/></p>
        </div>;
    }

    return (
        <div>
            <div className={styles.form}>
                <h1>Dodaj ogłoszenie</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className={styles.firstHalf}>
                        <p>
                            <label>
                                Nazwa ogłoszenia: <br/>
                                <input
                                    type="text"
                                    name="adName"
                                    required
                                    maxLength={70}
                                    placeholder="np. Używany Mercedes AMG"
                                    value={form.adName}
                                    onChange={e => updateForm('adName', e.target.value)}
                                />
                            </label>
                        </p>
                        <p>
                            <label>
                                Marka pojazdu: <br/>
                                <input
                                    type="text"
                                    name="brand"
                                    required
                                    maxLength={20}
                                    placeholder="np. Mercedes-Benz"
                                    value={form.brand}
                                    onChange={e => updateForm('brand', e.target.value)}
                                />
                            </label>
                        </p>
                        <p>
                            <label>
                                Model pojazdu: <br/>
                                <input
                                    type="text"
                                    name="model"
                                    required
                                    maxLength={50}
                                    placeholder="np. A35"
                                    value={form.model}
                                    onChange={e => updateForm('model', e.target.value)}
                                />
                            </label>
                        </p>
                        <p>
                            <label>
                                Cena (PLN): <br/>
                                <input
                                    type="number"
                                    name="price"
                                    required
                                    min="1"
                                    max="10000000"
                                    placeholder="np. 170000"
                                    value={form.price}
                                    onChange={e => updateForm('price', +e.target.value)}
                                />
                            </label>
                        </p>
                        <p>
                            <label>
                                Rok produkcji: <br/>
                                <input
                                    type="number"
                                    name="yearOfProduction"
                                    required
                                    min="1901"
                                    max="2155"
                                    step="1"
                                    placeholder="np. 2020"
                                    value={form.yearOfProduction}
                                    onChange={e => updateForm('yearOfProduction', +e.target.value)}
                                />
                            </label>
                        </p>
                        <p>
                            <label>
                                Przebieg: <br/>
                                <input
                                    type="number"
                                    name="kilometrage"
                                    required
                                    min="1"
                                    max="1000000"
                                    placeholder="np. 35000"
                                    value={form.kilometrage}
                                    onChange={e => updateForm('kilometrage', +e.target.value)}
                                />
                            </label>
                        </p>
                        <p>
                            <label>
                                Moc (KM): <br/>
                                <input
                                    type="number"
                                    name="hp"
                                    required
                                    min="1"
                                    max="3000"
                                    placeholder="np. 230"
                                    value={form.hp}
                                    onChange={e => updateForm('hp', +e.target.value)}
                                />
                            </label>
                        </p>
                        <p>
                            <label>
                                Kolor: <br/>
                                <input
                                    type="text"
                                    name="color"
                                    required
                                    maxLength={30}
                                    placeholder="np. Czerwony"
                                    value={form.color}
                                    onChange={e => updateForm('color', e.target.value)}
                                />
                            </label>
                        </p>
                    </div>
                    <div className={styles.secondHalf}>
                        <p>
                            <label>
                                Rodzaj paliwa: <br/>
                                <select name="fuel" value={form.fuel}
                                        onChange={e => updateForm('fuel', e.target.value)}>
                                    {
                                        Object.values(FuelTypes).map(fuel => (
                                            <option key={fuel} value={fuel}>{fuel}</option>
                                        ))
                                    }
                                </select>
                            </label>
                        </p>
                        <p>
                            <label>
                                Skrzynia biegów: <br/>
                                <select name="gearbox" value={form.gearbox}
                                        onChange={e => updateForm('gearbox', e.target.value)}>
                                    {
                                        Object.values(GearboxTypes).map(gearbox => (
                                            <option key={gearbox} value={gearbox}>{gearbox}</option>
                                        ))
                                    }
                                </select>
                            </label>
                        </p>
                        <p>
                            <label>
                                Typ nadwozia: <br/>
                                <select name="bodyType" value={form.bodyType}
                                        onChange={e => updateForm('bodyType', e.target.value)}>
                                    {
                                        Object.values(BodyTypes).map(bodyType => (
                                            <option key={bodyType} value={bodyType}>{bodyType}</option>
                                        ))
                                    }
                                </select>
                            </label>
                        </p>
                        <p>
                            <label>
                                Bezwypadkowy: <br/>
                                <select name="accidentFree" value={form.accidentFree}
                                        onChange={e => updateForm('accidentFree', +e.target.value)}>
                                    <option value={1}>Tak</option>
                                    <option value={0}>Nie</option>
                                </select>
                            </label>
                        </p>
                        <p>
                            <label>
                                Opis: <br/>
                                <textarea
                                    name="description"
                                    cols={38.9}
                                    rows={10}
                                    maxLength={255}
                                    placeholder="Opis ogłoszenia (nie wymagane)"
                                    value={form.description}
                                    onChange={e => updateForm('description', e.target.value)}
                                />
                            </label>
                        </p>
                        <Btn className={styles.button} text="Dodaj ogłoszenie"/>
                    </div>
                    <div>
                        <p>
                            <label className={styles.customFileUpload}>
                                <input
                                    name="file"
                                    type="file"
                                    required
                                    onChange={onFileChange}
                                />
                                Wybierz zdjęcie samochodu: {fileName ? fileName : 'Nie wybrano pliku'}
                            </label>
                        </p>
                    </div>
                </form>
                <Btn className={styles.goBack} to="/" text="Wróć na stronę główną"/>
            </div>
        </div>
    );
};