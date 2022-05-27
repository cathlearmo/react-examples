import React from 'react';
import { useTabs } from '../customHooks/useTabs.jsx';
import { Product, ProductDetails, ProductReview } from './product.jsx';

export function TabDemo() {
    const tabArray = ['Product', 'Details', 'Reviews'];

    const { tabs, currentTab } = useTabs(tabArray);

    return (
        <>
            {tabs}
            {currentTab === 'Product' && <Product/>}
            {currentTab === 'Details' && <ProductDetails/>}
            {currentTab === 'Reviews' && <ProductReview/>}
        </>
    );
}
