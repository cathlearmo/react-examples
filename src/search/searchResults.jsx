import React, { useEffect } from 'react';
import Pagination from '../pagination/pagination.jsx';
//import { PageSize } from "../pagination/paginationConstants.js";
import { useCurrentPage } from "../customHooks/useCurrentPage.jsx";
import './search.scss';

export function SearchResults({data}) {
    const pageSize = 6;
    const { currentPage, setCurrentPage, currentData } = useCurrentPage(data, pageSize);

    useEffect(() => {
        setCurrentPage(1);
    }, [data, setCurrentPage]);

    return (
        <>
            <div className="search-results">
                <ul>
                {
                    currentData.map((result, ind) => {
                        return (
                            <li key={ind}> 
                                <a href={result.url} target="_blank" rel="noreferrer">{result.title}</a>
                                <div>{result.description}</div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
}