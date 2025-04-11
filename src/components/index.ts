import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCartHOCProps } from '../interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard:ProductCartHOCProps = Object.assign( ProductCardHOC, {
    Buttons: ProductButtons,
    Image: ProductImage,
    Title: ProductTitle,
});

export default ProductCard;