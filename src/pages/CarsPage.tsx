import React, {useEffect, useState} from 'react';
import CarsComponent from "../components/Cars/CarsComponent";
import {carsService} from "../services/cars.api.service";
import {ICarWithAuth} from "../models/ICarWithAuth";

const CarsPage = () => {
    const [cars, setCars] = useState<ICarWithAuth[]>([])
    useEffect(() => {
        carsService.getCars().then(value => {
            if (value) {
                setCars(value.items)
            }
        })
    }, []);

    return (
        <div>
            <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsPage;