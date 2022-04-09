import React from 'react';

export function TableBody({ tableData}) {

    return (
        <tbody>
            {
                tableData.map((item, index) => {
                    const {id, first_name, last_name, email, phone} = item;

                    return <tr key={index}>
                        <td><label title={id}>{id}</label></td>
                        <td><label title={first_name}>{first_name}</label></td>
                        <td><label title={last_name}>{last_name}</label></td>
                        <td><label title={email}>{email}</label></td>
                        <td><label title={phone}>{phone}</label></td>
                    </tr>;
                })
            }
        </tbody>
    );
}

