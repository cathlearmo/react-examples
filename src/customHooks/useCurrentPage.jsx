import React from 'react';
import { PageSize } from '../pagination/paginationConstants.js';

//use the default of 10 for the pagesize or a passed in value which will override it

export const useCurrentPage = (data, pageSize = PageSize) => {
    const [currentPage, setCurrentPage] = React.useState(1);

    const currentData = React.useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data, pageSize]);

    return {
        currentPage,
        setCurrentPage,
        currentData
    };
};