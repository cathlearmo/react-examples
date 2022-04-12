import React from 'react';
import { SearchResults } from './searchResults.jsx';
import { useFetch } from '../customHooks/useFetch.jsx';
import { useInput } from "../customHooks/useInput.jsx";

//use custom hooks to re-use functional state code, examples here are useFetch and useInput

export function SearchQuery() {
    const searchPhrase = useInput('');
    const [url, setUrl] = React.useState('');

    const { data } = useFetch(url, []);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setUrl(`https://help-search-api-prod.herokuapp.com/search?query=${searchPhrase.value}`);
        }
    };

    const doSearch = () => {
        setUrl(`https://help-search-api-prod.herokuapp.com/search?query=${searchPhrase.value}`);
    };

    return (
        <>
            <div className="input-field">   
                <input className="search-input" placeholder="Enter a search phrase..." type="text"
                    onKeyDown={handleKeyDown} {...searchPhrase} /> 
                <input className="search-button" type="button" value="Search" onClick={doSearch} />
            </div>
            {<SearchResults data={data}/>}
            
        </>
    );
}
