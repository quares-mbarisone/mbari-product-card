import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
}

const App = () => {
  return (
    <div>
      <ProductCard      
        product={ product }
        initialValues={{
            count: 4,
            maxCount: 10
        }}
      >
        {
            () => (
            <>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons />          
            </>
            )
        }
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
