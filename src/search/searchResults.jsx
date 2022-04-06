import React, { useEffect, useState } from 'react';

function SearchResults({results}) {

    return (
        <div className="search-results">
            {
                results.map((result, ind) => <div key={ind}> 
                    <span title={result.description}>{result.title}</span>
                </div>)
            }
        </div>
    );
}

export function PaginateSearchResults({ itemsPerPage, results }) {

    const [paginatedResults, setPaginatedResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    
    useEffect(() => {
        const startPoint = currentPage === 1 ? 0 : currentPage * itemsPerPage;
        const endPoint = startPoint + 10;
        const newResults = results.slice(startPoint, endPoint);
        setPaginatedResults(newResults);
    }, [currentPage]);

    useEffect(() => {
        let numPages = Math.round(results.length / itemsPerPage);
        numPages = numPages === 0 ? 0 : numPages - 1;
        setTotalPages(numPages);
        const startPage = numPages === 0 ? 0 : 1;
        setCurrentPage(startPage);
    }, [results]);

    const pageLeft = () => {
        const newPageNumber = currentPage - 1;
        if (newPageNumber > 0) {
            setCurrentPage(newPageNumber);
        }
    };

    const pageRight = () => {
        const newPageNumber = currentPage + 1;
        if (newPageNumber <= totalPages) {
            setCurrentPage(newPageNumber);
        }
    };

    return (
        <>
            <SearchResults results={paginatedResults} />
            <div className="pagination-controls">
                <button onClick={pageLeft}>{'<'}</button>
                {currentPage}{' of '}{totalPages}
                <button onClick={pageRight}>{'>'}</button>
            </div>
        </>
    );
}
