'use client';

import React from 'react'
import styles from './AddToCart.module.css'

const AddToCart = () => {
    return (
        <div>
            <button className="border border-white-500 bg-sky-400 rounded-md px-2 py-1 m-1 text-base font-bold hover:bg-sky-200" onClick={() => { console.log("Shoes Added to Cart") }}>Add to Cart</button>
        </div>
    )
}

export default AddToCart
