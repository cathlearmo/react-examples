import React from 'react';
import { Button } from './button.jsx';
import './design.scss';

export function ProductItem({image, text, price, altText}) {

    return (
        <div className={'product-item'}>
            <img src={image} alt={altText}/>
            <p className="product-text">{text}</p>
            <p className="price">{price}</p>
            <Button className="pink-button" text="VIEW DETAILS"/>
        </div>
    );
}