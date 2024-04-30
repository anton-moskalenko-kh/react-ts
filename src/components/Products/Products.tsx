import React, {FC, useEffect, useState} from 'react';
import Product, {IProductProps} from "../Product/Product";

const Products:FC = () => {

    const [products, setProducts] = useState<IProductProps[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(({products}) => {
                setProducts(products)
            });
    }, [])

    return (
        <div>
            {products.map((product: IProductProps) =>
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    discountPercentage={product.discountPercentage}
                    rating={product.rating}
                    stock={product.stock}
                    brand={product.brand}
                    category={product.category}
                    images={product.images} />
            )}
        </div>
    );
};

export default Products;
