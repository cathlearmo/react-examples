import React from 'react';
import logo from './beach.jpg';

// React says Screen-readers already announce `img` tags as an image and so no alt tag is required for accessibility
// however the web says to include the alt tag so I am leaving it in
 
export function Banner() {
    return ( 
        <img src={logo} alt={"beach image"}/> 
    )
};