import React, { useEffect, useState } from 'react';

//Can use the table header and body to map any number of th and td values

export function TableHeader({ tableData}) {

    const [headerData, setHeaderData] = useState({});

    useEffect(() => {
        if (tableData.length) {
            let keys = Object.keys(tableData[0]);
            let newKeys = keys.map((key) => key.charAt(0).toUpperCase() + key.slice(1));
            newKeys = newKeys.map((key) => key.replace('_', ' '));
            setHeaderData(newKeys);
        }
    }, [tableData]);

    return (
        <thead>
            <tr>
            {
                Object.values(headerData).map((item, index) => <th key={index}><label>{item}</label></th>)
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

export function Table({className, tableData}) {
    return (
        <div className={className}>
            <table>
                <TableHeader tableData={tableData} />
                <TableBody tableData={tableData} />
            </table>
        </div>
    )
};



