import React, { useState, useEffect } from 'react';
import { Table } from './tableMap.jsx';
import Pagination from '../pagination/pagination.jsx';
import data from '../data/mockData.json';
import { PageSize } from "../pagination/paginationConstants.js";
import { useCurrentPage } from "../customHooks/useCurrentPage.jsx";
import './table.scss';

export function PersonTable() {
    const [tableData, setTableData] = useState([]);
    const { currentPage, setCurrentPage, currentData } = useCurrentPage(tableData);

    useEffect(() => {
        setTableData(data);
    }, []);

    return (
        <div className="page-right">
            <p>This page uses the same pagination component as the fetch example page</p>
            <Table className="table-class" tableData={currentData}/>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    );
}