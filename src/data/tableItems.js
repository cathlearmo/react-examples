const tableItems = [
    {name: 'Alan TitchMarsh', subject: 'Gardening', gender: 'M'},
    {name: 'Hilary Clinton', subject: 'Politics', gender: 'F'},
    {name: 'The Queen', subject: 'Royalty', gender: 'F'},
    {name: 'Charlie Dimmock', subject: 'Gardening', gender: 'F'},
    {name: 'Rick Astley', subject: 'Pop', gender: 'M'}
];

const columns = [
    {isSortable: true, label: 'Name', key: 'name'},
    {isSortable: true, label: 'Subject', key: 'subject'},
    {isSortable: true, label: 'Gender', key: 'gender'}
];

export const getTableItems = () => {
    return tableItems;
};

export const getColumns = () => {
    return columns;
};