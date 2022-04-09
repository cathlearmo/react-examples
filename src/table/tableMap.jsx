import React, { useEffect, useState } from 'react';
import _ from 'underscore';

//Can use the table header and body to map any number of th and td values

export function TableHeader({ tableData, setTableData, allData}) {

    const [headerData, setHeaderData] = useState({});
    const [sortValues, setSortValues] = useState({});

    useEffect(() => {
        if (tableData.length) {
            let keys = Object.keys(tableData[0]);
            let newKeys = keys.map((key) => key.charAt(0).toUpperCase() + key.slice(1));
            newKeys = newKeys.map((key) => key.replace('_', ' '));
            setHeaderData(newKeys);

            if (!Object.keys(sortValues).length) {
                const sortKeys = newKeys.reduce((sortKeys, key, ind) => {
                    sortKeys[key] = {value: keys[ind], direction: 'down'};
                    return sortKeys;
                }, {});
                setSortValues(sortKeys);
            }
        }
    }, [tableData, sortValues]);

    const sortHeader = (item) => {
        const sortKey = sortValues[item];
        if (sortKey) {
            const direction = sortKey.direction || "down";
            const data = direction === "up" ? _.sortBy(allData, function (i) { return isNaN(i[sortKey.value]) ? i[sortKey.value].toString().toLowerCase() : i[sortKey.value];}) :
            _.sortBy(allData, function (i) {return isNaN(i[sortKey.value]) ? i[sortKey.value].toString().toLowerCase() : i[sortKey.value];}).reverse();
            sortKey.direction = direction === "up" ? "down" : "up";
            setSortValues(sortValues);
            setTableData(data);
        }
    };

    return (
        <thead>
            <tr>
            {
                Object.values(headerData).map((item, index) => <th key={index} onClick={() => sortHeader(item)}><label>{item}</label></th>)
            }
            </tr>
        </thead>
    );
}


export function TableBody({ tableData}) {

    return (
        <tbody>
            {
                tableData.map((item, index) => {
                    return (
                        <tr key={index}>
                        {
                            Object.keys(item).map((key, ind) => <td key={ind}><label>{item[key]}</label></td>)
                        }
                        </tr>
                    )
                })
            }
        </tbody>
    );
}

export function Table({className, tableData, setTableData, allData}) {
    return (
        <div className={className}>
            <table>
                <TableHeader tableData={tableData} setTableData={setTableData} allData={allData} />
                <TableBody tableData={tableData} />
            </table>
        </div>
    )
};



