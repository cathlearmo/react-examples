import React from 'react';
import { PageSize } from '../pagination/paginationConstants.js';

export const useCurrentPage = () => {
    const [currentPage, setCurrentPage] = React.useState(1);

    const currentData = React.useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);

    return {
        currentPage,
        setCurrentPage,
        currentData
    };
};




