import React, {FC} from 'react';
import {ICarWithAuth} from "../../models/ICarWithAuth";
import styles from './Сar.module.css'

interface IPropsCar {
    car: ICarWithAuth
}
const CarComponent: FC<IPropsCar> = ({car}) => {
    return (
        <div className={styles.carBlock}>
            <h3>{car.id} {car.brand}</h3>
            <p>Year: {car.year}</p>
            <p>Price: {car.price}</p>
        </div>
    );
};

export default CarComponent;