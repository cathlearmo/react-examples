import React from 'react';
import logo from './beach.jpg';

 //add alt text on the img to describe the image for screen readers - accessibility and for SEO improvement
 
export function Banner() {
    return ( 
        <img src={logo} alt={"beach image"}/> 
    )
};