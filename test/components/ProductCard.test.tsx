import React from 'react';

import { ProductCard } from '../../src/components';
import { fireEvent, render, screen } from '@testing-library/react';
import { product1 } from '../data/products';

describe('Pruebas en <ProductCard/>', () => {

    test('debe de mostrar el componente correctamente', () => {
        render(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        );
        expect(screen.getByText('Product Card')).toMatchSnapshot();
    });

    test('debe de incrementar el contador', () => {
        render(
            <ProductCard product={ product1 }>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <p>{ count }</p>
                            <button 
                                onClick={() => increaseBy(1)}
                                aria-label='increase-btn'
                            > + </button>
                        </>
                    )
                }
            </ProductCard>
        );
        
        expect(screen.getByRole('paragraph').innerHTML).toBe('0');

        const increaseBtn = screen.getByLabelText('increase-btn')
        fireEvent.click(increaseBtn)

        expect(screen.getByRole('paragraph').innerHTML).toBe('1');

    });

});
