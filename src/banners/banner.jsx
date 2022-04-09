import React from 'react';

// React says Screen-readers already announce `img` tags as an image and so no alt tag is required for accessibility
// however the web says to include the alt tag so I am leaving it in
 
export function Banner({image, altText}) {
    return ( 
        <img src={image} alt={altText}/> 
    )
};