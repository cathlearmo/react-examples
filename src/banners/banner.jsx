import React from 'react';
import './banner.scss';

export function Banner({text1, text2, className = "banner-header"}) {
    return ( 
        <div className={className}>
            <span>{text1}</span><br/>
            {text2 && <span>{text2}</span>}
        </div>
    )
};