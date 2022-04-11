import React from 'react';
import mainBannerImage from './designImages/mobile-main-banner-image.jpg';
import { useMediaQuery } from 'react-responsive';
import './design.scss';

export function MainBanner() {

    const isDesktop = useMediaQuery({ minWidth: 992 });
    const contentClass = isDesktop ? 'centered desktop' : 'centered mobile';

    return (
        <div className="main-banner">
            <img src={mainBannerImage}/>
            <div className={contentClass}>
                <label>Crafting Spirits with Passion</label>
                <div>
                    <button className="blue-button" type="button">VISIT OUR SHOP</button>
                </div>
            </div>
        </div>
    );
}