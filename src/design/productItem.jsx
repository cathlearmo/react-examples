import React from 'react';
import './design.scss';

export function ProductItem({image, text, price}) {

    return (
        <div className={'product-item'}>
            <img src={image}/>
            <p>{text}</p>
            <p className="price">{price}</p>
            <div>
                <button className="pink-button" type="button">VIEW DETAILS</button>
            </div>
        </div>
    );
}