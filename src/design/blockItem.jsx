import React from 'react';
import './design.scss';

export function BlockItem({image, altText}) {

    return (
        <div className={'block-item'}>
            <img src={image} alt={altText}/>
        </div>
    );
}