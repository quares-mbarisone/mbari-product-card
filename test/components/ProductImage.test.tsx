import React from 'react';

import { ProductCard, ProductImage } from '../../src/components';
import { render, screen } from '@testing-library/react';
import { product2 } from '../data/products';

describe('Pruebas en <ProductImage/>', () => {
  
    test('debe de mostrar el componente correctamente con la imagen personalizado', () => {
        render(<ProductImage img='https://inkscape.app/wp-content/uploads/imagen-vectorial.webp' />);
        expect(screen.getByAltText('Product')).toMatchSnapshot();
    });


    test('debe de mostrar el componente con la imagen del producto', () => {
        render(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect(screen.getByAltText('Product')).toBeTruthy();
    });

});