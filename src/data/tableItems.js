import data from './mockData.json';

const columns = [
    {isSortable: true, label: 'Id', key: 'id'},
    {isSortable: true, label: 'First name', key: 'first_name'},
    {isSortable: true, label: 'Last name', key: 'last_name'},
    {isSortable: true, label: 'Email', key: 'email'},
    {isSortable: true, label: 'Phone', key: 'phone'}
];

export const getTableItems = () => {
    return data;
};

export const getColumns = () => {
    return columns;
};