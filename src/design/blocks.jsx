import React from 'react';
import block1 from './designImages/desktop-block-image-1.jpg';
import block2 from './designImages/desktop-block-image-2.jpg';
import block3 from './designImages/desktop-block-image-3.jpg';
import { BlockItem } from './blockItem.jsx';
import { useMediaQuery } from 'react-responsive';
import './design.scss';

export function Blocks() {

    const isDesktop = useMediaQuery({ minWidth: 992 });

    return (
        <div className={isDesktop ? 'block-container desktop' : 'block-container mobile'}>
            <BlockItem image={block1} altText="Image for Latest News"/>
            <BlockItem image={block2} altText="Image for Awards"/>
            <BlockItem image={block3} altText="Image for Our Podcast"/>
        </div>
    );
}