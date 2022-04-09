import React from 'react';
import { Table } from './tableMap.jsx';
import Pagination from '../pagination/pagination.jsx';
import inputData from '../data/mockData.json';
import { PageSize } from "../pagination/paginationConstants.js";
import { useCurrentPage } from "../customHooks/useCurrentPage.jsx";
import { useData } from "../customHooks/useData.jsx";
import './table.scss';

export function PersonTable() {
    const { data, setData} = useData(inputData);
    const { currentPage, setCurrentPage, currentData } = useCurrentPage(data);

    return (
        <div className="page-right">
            <p>This page uses the same pagination component as the fetch example page</p>
            <p>Click on a table header to sort the data by the column value</p>
            <Table 
                className="table-class" 
                tableData={currentData} 
                setTableData={setData} 
                allData={inputData}
            />
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