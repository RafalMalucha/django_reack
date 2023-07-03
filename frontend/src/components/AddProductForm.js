import React, { useState } from 'react';

const AddProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: name,
            price: price,
        };

    try {
        const response = await fetch('http://127.0.0.1:8000/api/submit/', {
            method: 'POST',
            data: {
                "product_name": "aaa",
                "product_price": 13.50,
                "product_category": "instrument"
            }
        });

        if (response.ok) {
            console.log('Product added successfully');
            setName('');
            setPrice('');
        } else {
            throw new Error('Failed to add product');
        }
    } catch (error) {
        console.error(error);
    }
};

    return (
        <form onSubmit={handleSubmit}>
        <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;