import React, { useState, useEffect, useMemo } from 'react';
import { TableBody } from './tableBody.jsx';
import Pagination from '../pagination/pagination.jsx';
import data from '../data/mockData.json';

let PageSize = 10;

export function PersonTable() {
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return tableData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, tableData]);

    useEffect(() => {
        setTableData(data);
    }, []);


    return (
        <div className="page-right">
            <p>This page uses the same pagination component as the fetch example page</p>
            <div className={'Table-class'}>
                <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <TableBody tableData={currentData} />
                </table>
            </div>
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