import React from 'react';
import mainBannerImage from './designImages/mobile-main-banner-image.jpg';
import mobileMainBannerImage from './designImages/mobile-main-banner-image.jpg';
import { useMediaQuery } from 'react-responsive';
import { Button } from './button.jsx';
import './design.scss';

export function MainBanner() {

    const isDesktop = useMediaQuery({ minWidth: 992 });
    const contentClass = isDesktop ? 'centered desktop' : 'centered mobile';
    const image = isDesktop ? mainBannerImage : mobileMainBannerImage;

    return (
        <div className="main-banner">
            <img src={image}/>
            <div className={contentClass}>
                <label>Crafting Spirits with Passion</label>
                <Button className="blue-button" text="VISIT OUR SHOP"/>
            </div>
        </div>
    );
}