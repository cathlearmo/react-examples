import React from 'react';
import './tabDetails.scss';
import { useCheckboxes } from '../customHooks/useCheckboxes.jsx';

export function Product() {

    const source = "https://images-assets.nasa.gov/image/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o~thumb.jpg";
    return (
        <>
            <h2> "Hubble Observes One-of-a-Kind Star Nicknamed ‘Nasty’"</h2>
            <div className="image">
                <img src={source}/>
            </div>
        </>
    );
}

export function ProductDetails() {
    const description = "Astronomers using NASA’s Hubble Space Telescope have uncovered surprising new clues about a hefty, rapidly aging star whose behavior has never been seen before in our Milky Way galaxy. In fact, the star is so weird that astronomers have nicknamed it “Nasty 1,” a play on its catalog name of NaSt1. The star may represent a brief transitory stage in the evolution of extremely massive stars.  First discovered several decades ago, Nasty 1 was identified as a Wolf-Rayet star, a rapidly evolving star that is much more massive than our sun. The star loses its hydrogen-filled outer layers quickly, exposing its super-hot and extremely bright helium-burning core.  But Nasty 1 doesn’t look like a typical Wolf-Rayet star. The astronomers using Hubble had expected to see twin lobes of gas flowing from opposite sides of the star, perhaps similar to those emanating from the massive star Eta Carinae, which is a Wolf-Rayet candidate.   Instead, Hubble revealed a pancake-shaped disk of gas encircling the star. The vast disk is nearly 2 trillion miles wide, and may have formed from an unseen companion star that snacked on the outer envelope of the newly formed Wolf-Rayet.  Based on current estimates, the nebula surrounding the stars is just a few thousand years old, and as close as 3,000 light-years from Earth.  Credits: NASA/Hubble";
    const checkboxGroup = 	[
        {label: 'Hubble', isChecked: true},
        {label: 'Milky Way', isChecked: false},
        {label: 'Star', isChecked: false}
    ];

    const { boxes } = useCheckboxes(checkboxGroup);

    return (
        <>
            <div className={'product-detail-line'}>
                <label>{description}</label>
                <h2>Keywords</h2>
                {boxes}
            </div>
        </>
    );
}

export function ProductReview() {
    return (
        <>
            <div className={'product-detail-line'}>
                <label>"This star is nasty, nasty in a good way. A 5 star star"</label>
            </div>
        </>
    );
}
