import { JSX } from "react";
import { Props as ProductButtonsProps} from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps} from "../components/ProductImage";
import { Props as ProductTitleProps} from "../components/ProductTitle";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
}

export interface ProductCartHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Buttons: ( Props: ProductButtonsProps) => JSX.Element;
    Image: ( Props : ProductImageProps) => JSX.Element;
    Title: ( Props: ProductTitleProps) => JSX.Element;
}

export interface OnChangeArgs {
    count: number;
    product: Product;
}

export interface ProductInCart extends Product {
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCartHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: ( value: number ) => void;
    reset: () => void;
}