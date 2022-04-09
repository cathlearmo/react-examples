import React from 'react';
import { Banner } from '../banners/banner.jsx';
import { SearchQuery } from '../search/search.jsx';
import logo from '../banners/beach.jpg';

export function SearchPage() {

    return (
        <div>
            <Banner image={logo} altText={"beach image"}/>
            <SearchQuery/>
        </div>
    );
}
