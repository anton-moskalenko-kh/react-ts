import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import styles from './Form.module.css'
import {sendPost} from "../services/post.api.services";

export interface IFormProps {
    title: string,
    body: string,
    userId: number,
}
const Form: FC = () => {

    const {handleSubmit, register, formState: {errors}} = useForm<IFormProps>({mode: "all", resolver: joiResolver(postValidator)})

    const sendPostRequest = (post: IFormProps) => {
        sendPost(post).then((response) => console.log(response.data))
    }

    return (
        <div className={styles.mainBlock}>
            <h3>Create post</h3>
            <form className={styles.form} onSubmit={handleSubmit(sendPostRequest)}>
                <label>
                    <input type="text" {...register('title')} placeholder={'Enter title of posts'}/>
                    {errors.title && <div className={styles.error}>{errors.title.message}</div>}
                </label>

                <label >
                    <input type="text" {...register('body')} placeholder={'Enter body of posts'}/>
                    {errors.body && <div className={styles.error}>{errors.body.message}</div>}
                </label>

                <label>
                    <input type="number" {...register('userId' )} placeholder={'Enter user ID'}/>
                    {errors.userId && <div className={styles.error}>{errors.userId.message}</div>}
                </label>

                <button className={styles.button}>Send post</button>
            </form>
        </div>
    );
};

export default Form;