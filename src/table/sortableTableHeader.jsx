import React, { useState } from 'react';
import _ from 'lodash';

export function SortableTableHeader({columns, tableData, setTableData, onSort, initialSortValue}) {

    //initial state of sort icon for all columns is "false" (no icon to show as not sorted)
    //This component can be used to sort a table containing any number of columns
    //columns is an array containing
    //{className(optional), isSortable(boolean required), key(required if sortable), resourceKey(optional string)}
    
    //work out which columns are sortable and give them a key
    const sortIconKeys = columns.reduce((iconKeys, column) => {
        if (column.isSortable) {
            if (initialSortValue && initialSortValue.key === column.key) {
                iconKeys[column.key] = initialSortValue.direction === 'down' ? "fas fa-sort-up" : "fas fa-sort-down";
            } else {
                iconKeys[column.key] = "false";
            }
        }
        return iconKeys;
    }, {});

    const [sortIcon, setSortIcon] = useState(sortIconKeys);
    const [checked, setChecked] = useState(false);

    //show sort direction of the selected header and sort the table data which should have a matching column value for the sort key
    const sortHeader = (key) => {
        const newSortState = sortIconKeys;
        newSortState[key] = sortIcon[key] === "fas fa-sort-up" ? "fas fa-sort-down" : "fas fa-sort-up";
        setSortIcon(newSortState); 
        //perform a custom sort
        if (onSort) {
            const direction = newSortState[key] === "fas fa-sort-up" ? 'up' : 'down';
            const sortValues = {key, direction};
            onSort(sortValues);
        } else { //do standard sort of the table data
            
            const data = newSortState[key] === "fas fa-sort-up" ? _.sortBy(tableData, function (i) { return isNaN(i[key]) ? i[key].toString().toLowerCase() : i[key];}) :
                _.sortBy(tableData, function (i) {return isNaN(i[key]) ? i[key].toString().toLowerCase() : i[key];}).reverse();
            setTableData(data);
        }
    };

    const tableHeader = columns.map((column, ind) => {
        if (column.isCheckbox) {
            return <th key={ind} className={column.className || null}>
                <input type="checkbox" defaultChecked={checked} onChange={(event) => setChecked(event.target.checked)}/>
            </th>;
        } else if (column.isSortable) {
            return <th key={ind} className={column.className || null} data-key={column.key} onClick={(e) => sortHeader(e.currentTarget.dataset.key)}>
                <span className="sort-header">
                    {column.label && <label>{column.label}</label>}
                    {column.resolvedKey && <label>{column.resolvedKey}</label>}
                    <span className={sortIcon[column.key]}/>
                </span>                
            </th>;
        } else if (column.label) {
            return <th key={ind} className={column.className || null}><label>{column.label}</label></th>;
        } else {
            return <th key={ind} className={column.className || null} />;
        }
    });

    return (
        <thead>
            <tr>
                {tableHeader}
            </tr>
        </thead>
    );
}

