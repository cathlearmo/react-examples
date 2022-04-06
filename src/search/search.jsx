import React from 'react';
import { PaginateSearchResults } from './searchResults.jsx';
import { useFetch } from '../customHooks/useFetch.jsx';

export function SearchQuery() {
    const [searchPhrase, setSearchPhrase] = React.useState('');
    const [url, setUrl] = React.useState('https://help-search-api-prod.herokuapp.com/search?query=');

    const { data } = useFetch(
        url,
        []
    );

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setUrl(`https://help-search-api-prod.herokuapp.com/search?query=${searchPhrase}`);
        }
    };

    const doSearch = () => {
        setUrl(`https://help-search-api-prod.herokuapp.com/search?query=${searchPhrase}`);
    };

    return (
        <div className="page-right">
            <div className="input-field">    
                <input type="text" autoFocus 
                    onChange={(event) => setSearchPhrase(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <input type="button" value="Search" onClick={doSearch} />
            </div>
            {<PaginateSearchResults itemsPerPage={10} results={data}/>}
            
        </div>
    );
}
