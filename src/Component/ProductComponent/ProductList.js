import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { products } from '../../data';

function ProductList({ addToCart, changeQuantity, removeFromCart}) {
    return (
        <>
            <div className="container mt-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                    {products.map(laptop => (
                        <div className="col" key={laptop.id}>
                            <div className="animated">
                                <div className="card shadow-sm">
                                    <img src={laptop.image} className="card-img-top" alt={laptop.name} style={{ height:225, objectFit: 'contain' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{laptop.name}</h5>
                                        <p className="card-text">{laptop.description}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-muted">${laptop.price}</small>
                                            <div className="btn-group">
                                                <Link to={`/product/${laptop.id}`} className="btn btn-sm btn-outline-secondary">View</Link>
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => addToCart(laptop)}>
                                                    <Link to="/cart" className="nav-link">Add</Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductList;
