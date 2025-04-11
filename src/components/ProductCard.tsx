
import { useProduct } from "../hooks/useProduct";
import React, { createContext, CSSProperties, JSX } from 'react';
import { Product, ProductContextProps, OnChangeArgs, InitialValues, ProductCartHandlers } from "../interfaces";

import styles from "../styles/styles.module.css";

export interface Props {
    product: Product;
    children: ( args: ProductCartHandlers ) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }:Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product,
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }`}
                style={ style }
            >  
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount,
                        product,
                        increaseBy,
                        reset,
                    }) 
                }
            </div>
        </Provider>
    )
}


