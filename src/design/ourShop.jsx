import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './design.scss';

export function OurShop() {

    const isDesktop = useMediaQuery({ minWidth: 992 });

    return (
        <div className={isDesktop ? 'our-shop desktop' : 'our-shop mobile'}>
            <label>Our Shop</label>
            <p>FREE GLASS with every order to help you Celebrate Burns Night. Check out offer on our glassware shop page.</p>
        </div>
    );
}