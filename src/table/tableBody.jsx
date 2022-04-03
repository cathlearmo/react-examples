import React from 'react';

export function TableBody({ tableData}) {

    return (
        <tbody>
            {
                tableData.map((item, index) => {
                    const {name, subject, gender} = item;

                    return <tr key={index}>
                        <td><label title={name}>{name}</label></td>
                        <td><label title={subject}>{subject}</label></td>
                        <td><label title={gender}>{gender}</label></td>
                    </tr>;
                })
            }
        </tbody>
    );
}

