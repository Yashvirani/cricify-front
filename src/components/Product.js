import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div
      key={product._id}
      className="card"
      style={{
        width: '20vw',
        height: '60vh',
        boxShadow: '0px 5px 7px -7px rgba(0, 0, 0, 1)',
        borderRadius: '10px',
      }}
    >
      <Link to={`/product/${product._id}`}>
        <img
          style={{ height: '15vw', width: '100%', objectFit: 'cover' }}
          className="medium"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">₹{product.price}</div>
          <div>
            <Link to={`/seller/${product.seller._id}`}>
              {product.seller.seller.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
