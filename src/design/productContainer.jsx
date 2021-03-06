import React from 'react';
import product1 from './designImages/desktop-product-image-1.jpg';
import product2 from './designImages/desktop-product-image-2.jpg';
import product3 from './designImages/desktop-product-image-3.jpg';
import product4 from './designImages/desktop-product-image-4.jpg';
import { ProductItem } from './productItem.jsx';
import { useMediaQuery } from 'react-responsive';
import { Button } from './button.jsx';
import './design.scss';

export function ProductContainer() {
    
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const contentClass = isDesktop ? 'product-container desktop' : 'product-container mobile';

    return (
        <>
            <div className={contentClass}>
                <ProductItem
                    image={product1} 
                    text={'Edinburgh Gin Gooseberry & Elderflower Flavoured Gin'}
                    price={'£28.00'}
                    altText="Gin bottle for Edinburgh gin gooseberry and elderflower"
                />
                <ProductItem
                    image={product2} 
                    text={'Sheep Dip Islay Blended Malt Whisky'}
                    price={'£35.00'}
                    altText="Whisky bottle for Sheep Dip Islay"
                />
                <ProductItem
                    image={product3} 
                    text={"Macleod's Single Malt Whisky"}
                    price={'£28.00'}
                    altText="Whisky bottle for Macleod's single malt"
                />
                <ProductItem
                    image={product4} 
                    text={'Smokehead Rum Rebel'}
                    price={'£249.00'}
                />
            </div>
            <div className={isDesktop ? 'visit-shop desktop' : 'visit-shop mobile'}>
                <Button className="blue-button" text="VISIT OUR SHOP"/>
            </div>
        </>
    );
}