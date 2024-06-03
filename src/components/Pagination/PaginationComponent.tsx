import React, {FC} from 'react';
import styles from './Pagination.module.css'
import {useSearchParams} from "react-router-dom";
import {IPaginationPageModel} from "../../models/IPaginationPageModel";

interface IProps {
    prev: IPaginationPageModel | null,
    next: IPaginationPageModel | null
}

const PaginationComponent: FC<IProps> = ({next, prev}) => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                setQuery({...prev})
                break
            case 'next':
                setQuery({...next})
        }
    };
    return (
        <div className={styles.paginationBlock}>
            <button disabled={!prev}
                    onClick={() => {
                        changePage('prev')
                    }}>Prev page</button>
            <button disabled={!next}
                    onClick={() => {
                        changePage('next')
                    }}>Next page</button>
        </div>
    );
};

export default PaginationComponent;