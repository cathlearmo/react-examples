import React from 'react';
import { MainBanner } from './mainBanner.jsx';
import { OurShop } from './ourShop.jsx';
import { Blocks } from './blocks.jsx';
import './design.scss';

export function DesignPage() {

    return (
        <div className="design-page">
            <MainBanner/>
            <OurShop />
            <Blocks />
        </div>
    );
}