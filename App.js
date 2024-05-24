import React from 'react';
import './App.css';

const products = [
  {
    id: 1,
    name: 'style 1',
    price: '$50',
    size: 'M',
    color: 'Red',
    image: '1.avif',
  },
  {
    id: 2,
    name: 'style 2',
    price: '$60',
    size: 'L',
    color: 'Blue',
    image: '2.avif',
  },
  {
    id: 3,
    name: 'style 3',
    price: '$70',
    size: 'S',
    color: 'Green',
    image: '3.avif',
  },
];

function App() {
  return (
    <div className="App">
      <div className="product-row">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Size: {product.size}</p>
            <p>Color: {product.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
