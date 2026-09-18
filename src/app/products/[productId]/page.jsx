import React from 'react';

const ProductDetailsPage = async({ params }) => {
    const { productId } =await params;
    const res = await fetch(`http://localhost:5000/products/${productId}`)
    const products = await res.json()
    return (
        <div>
            <h2>Title: {products.name}</h2>
            <h2>Rating: {products.rating}</h2>
            <h2>Description: {products.description}</h2>
        </div>
    );
};

export default ProductDetailsPage;