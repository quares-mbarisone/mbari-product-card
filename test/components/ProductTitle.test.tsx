import React from 'react';

import { ProductTitle, ProductCard } from '../../src/components';
import { render, screen } from '@testing-library/react';
import { product1 } from '../data/products';

describe('Pruebas en <ProductTitle/>', () => {
  
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
        render(<ProductTitle title="Custom Product" />);
        expect(screen.getByText('Custom Product')).toMatchSnapshot();
    });


    test('debe de mostrar el componente con el nombre del producto', () => {
        render(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );
        expect(screen.getByText('Coffee Mug - Sin Imagen')).toBeTruthy();
    });

});
