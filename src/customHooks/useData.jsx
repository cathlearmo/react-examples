import React from 'react';

export const useData = (inputData) => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        setData(inputData);
    }, [inputData]);

    return {
        data,
        setData
    };
};