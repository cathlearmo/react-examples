import React from 'react';
import './design.scss';

export function Button({className, text}) {

    return (
        <div>
            <button className={className} type="button">{text}</button>
        </div>
    );
}