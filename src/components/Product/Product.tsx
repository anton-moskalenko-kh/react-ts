import React, {FC} from 'react';
import styles from './Product.module.css'

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail?: string,
    images: string[]
}

export type IProductTypeProps = IProductProps & {children?: React.ReactNode}
const Product: FC<IProductTypeProps> = ({
                                            id,
                                            title,
                                            description,
                                            price,
                                            discountPercentage,
                                            rating,
                                            stock,
                                            brand,
                                            category,
                                            images
                                        }) => {
    return (
        <div className={styles.productBlock}>
            <h3>{id} - {title}</h3>
            <p>{description}</p>
            <p>Price: {price}$</p>
            <p>Discount: {discountPercentage}</p>
            <p>Rating: {rating}</p>
            <p>Stock: {stock}</p>
            <p>Category: {category}. Brand: {brand}</p>
            <div className={styles.imagesBlock}>
                {images.map((image, index) =>
                    <div key={index} className={styles.imageBlock}>
                        <img src={image} alt={title}/>
                    </div>)}
            </div>
        </div>
    );
};

export default Product;