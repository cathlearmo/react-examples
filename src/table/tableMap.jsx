import React, { useEffect, useState } from 'react';
import _ from 'underscore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

//Can use the table header and body to map any number of th and td values

export function TableHeader({ tableData, setTableData, allData}) {

    const [headerData, setHeaderData] = useState({});
    const [sortValues, setSortValues] = useState({});
    const [currentSortItem, setCurrentSort] = useState({});

    useEffect(() => {
        //only need to do this once so this is why this check is here
        if (tableData.length && !Object.keys(headerData).length) {
            let keys = Object.keys(tableData[0]);
            let newKeys = keys.map((key) => key.charAt(0).toUpperCase() + key.slice(1));
            newKeys = newKeys.map((key) => key.replace('_', ' '));
            setHeaderData(newKeys);

            const sortKeys = newKeys.reduce((sortKeys, key, ind) => {
                sortKeys[key] = {value: keys[ind], direction: 'down'};
                return sortKeys;
            }, {});
            setSortValues(sortKeys);
        }
    }, [tableData, sortValues, headerData]);

    const sortHeader = (item) => {
        const sortItem = {};

        const sortKey = sortValues[item];
        if (sortKey) {
            const direction = sortKey.direction || "down";
            const data = direction === "down" ? _.sortBy(allData, function (i) { return isNaN(i[sortKey.value]) ? i[sortKey.value].toString().toLowerCase() : i[sortKey.value];}) :
            _.sortBy(allData, function (i) {return isNaN(i[sortKey.value]) ? i[sortKey.value].toString().toLowerCase() : i[sortKey.value];}).reverse();
            const newDirection = direction === "up" ? "down" :"up";
            sortKey.direction = newDirection;
            sortItem[item] = {direction: newDirection};
            setTableData(data);
            setCurrentSort(sortItem);
        }
    };

    return (
        <thead>
            <tr>
            {
                Object.values(headerData).map((item, index) => {
                    if (currentSortItem[item]) {
                        const sortDirection = currentSortItem[item].direction;
                        const icon = sortDirection  === "up" ? <FontAwesomeIcon icon={solid('arrow-up')} /> : <FontAwesomeIcon icon={solid('arrow-down')} />;
                        return <th key={index}>
                            <label className="sort-item" aria-label={item} onClick={() => sortHeader(item)}>{item}</label>
                            {icon}
                        </th>
                    }
                    return <th key={index}><label aria-label={item} onClick={() => sortHeader(item)}>{item}</label></th>
                })
            }
            </tr>
        </thead>
    );
}


export function TableBody({ tableData }) {

    return (
        <tbody>
            {
                tableData.map((item, index) => {
                    return (
                        <tr key={index}>
                        {
                            Object.keys(item).map((key, ind) => <td key={ind}><label aria-label={item[key]}>{item[key]}</label></td>)
                        }
                        </tr>
                    )
                })
            }
        </tbody>
    );
}

export function Table({className = "table-class", tableData = [], setTableData, allData = []}) {
    if (tableData.length > 0) {
        return (
            <div className={className}>
                <table>
                    <TableHeader tableData={tableData} setTableData={setTableData} allData={allData} />
                    <TableBody tableData={tableData} />
                </table>
            </div>
        )
    }
    return null;

};



