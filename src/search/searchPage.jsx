import React from 'react';
import { Banner } from '../banners/banner.jsx';
import { SearchQuery } from '../search/search.jsx';

export function SearchPage() {

    const textOne = "The fetch demo uses a Sky TV web service.";
    const textTwo = "You will need to enter for example 'TV' or 'phone' to see results.";

    return (
        <div>
            <Banner text1={textOne} text2={textTwo}/>
            <SearchQuery/>
        </div>
    );
}
