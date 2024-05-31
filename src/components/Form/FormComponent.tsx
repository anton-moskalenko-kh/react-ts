import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IAuthDataModel} from "../../models/IAuthDataModel";
import {authService} from "../../services/auth.api.service";
import styles from './Form.module.css'

const FormComponent = () => {

    const {handleSubmit, register} = useForm<IAuthDataModel>();
    const [isAuthState, setIsAuthState] = useState(false)
    const authorization = async (formData: IAuthDataModel): Promise<boolean>  => {
        const isAuth = await authService.authorization(formData)
        setIsAuthState(isAuth)
        return true
    };
    return (
        <div className={styles.formBlock}>
            <h3>Login form</h3>
            <div className={styles.statusBlock}>{isAuthState ?
                <span>Successful authorization</span>
                :
                <span>Your data is wrong. Check login and password</span>}</div>
            <form onSubmit={handleSubmit(authorization)}>
                <input type="text" {...register('username')} placeholder={'Enter your login'}/>
                <input type="text" {...register('password')} placeholder={'Enter your password'}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default FormComponent;