import React from 'react';
import { Banner } from '../components/layout/Banner/Banner';
import { Filters } from '../components/layout/Filters/Filters';
import { Cars } from '../components/layout/Cars/Cars';

export const MainView = () => (
    <>
        <Banner/>
        <Filters/>
        <Cars/>
    </>
);