import React, {FC} from 'react';
import {ICarWithAuth} from "../../models/ICarWithAuth";
import CarComponent from "../Car/CarComponent";
import styles from './Cars.module.css'

interface IPropsCars {
    cars: ICarWithAuth[]
}
const CarsComponent: FC<IPropsCars>  = ({cars}) => {

 return (
        <div className={styles.carsBlock}>
            {cars.map(car => <CarComponent car={car}/>)}
        </div>
    );
};

export default CarsComponent;