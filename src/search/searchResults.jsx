import React, { useState, useMemo, useEffect } from 'react';
import Pagination from '../pagination/pagination.jsx';
import { PageSize } from "../pagination/paginationConstants.js";

export function SearchResults({data}) {
    const [currentPage, setCurrentPage] = useState(1);

    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);

    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    return (
        <>
            <div className="search-results">
                {
                    currentData.map((result, ind) => <div key={ind}> 
                        <span title={result.description}>{result.title}</span>
                    </div>)
                }
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