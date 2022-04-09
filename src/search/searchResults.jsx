import React, { useEffect } from 'react';
import Pagination from '../pagination/pagination.jsx';
import { PageSize } from "../pagination/paginationConstants.js";
import { useCurrentPage } from "../customHooks/useCurrentPage.jsx";
import './search.scss';

export function SearchResults({data}) {
    const { currentPage, setCurrentPage, currentData } = useCurrentPage(data);

    useEffect(() => {
        setCurrentPage(1);
    }, [data, setCurrentPage]);

    return (
        <>
            <div className="search-results">
                <ul>
                {
                    currentData.map((result, ind) => <li key={ind}> 
                        <span title={result.description}>{result.title}</span>
                    </li>)
                }
                </ul>
            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
}