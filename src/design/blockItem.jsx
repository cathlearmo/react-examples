import React from 'react';
import './design.scss';

export function BlockItem({image, altText}) {

    return (
        <div className={'block-item'}>
            <div className="image-stack">
                <div className="block-image">
                    <img src={image} alt={altText}/>
                </div>
                <div className="block-overlay"/>
            </div>
        </div>
    );
}