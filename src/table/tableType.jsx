import React, { useState, useEffect } from 'react';
import { TableBody } from './tableBody.jsx';
import { SortableTableHeader } from './sortableTableHeader.jsx';
import { getTableItems, getColumns } from '../data/tableItems.js'

export function PersonTable() {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        setData(getTableItems());
        setColumns(getColumns());
    }, []);

    return (
        <div className={'Table-class'}>
            <table>
                <SortableTableHeader columns={columns} tableData={data} setTableData={setData} />
                <TableBody tableData={data} />
            </table>
        </div>
    );
}