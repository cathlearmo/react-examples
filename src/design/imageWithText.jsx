import React from 'react';
import mainBannerImage from './designImages/mobile-main-banner-image.jpg';
import { useMediaQuery } from 'react-responsive';
import './design.scss';

export function ImageWithText() {

    const isDesktop = useMediaQuery({ minWidth: 992 });

    const titleClass = isDesktop ? 'main-banner-title-desktop' : 'main-banner-title-mobile';

    return (
        <div className="main-banner">
            <img src={mainBannerImage} alt="Snow" style={{width: "100%"}}/>
            <div className="centered">
                <label className={titleClass}>Crafting Spirits with Passion</label>
            </div>
        </div>
    );
}