import { useState, useEffect } from "react";

export const useFetch = (url, initialValue) => {
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;
        fetch(url)
            .then((data) => {
                if (!data.ok) {
                    throw Error(data.status);
                } else {
                    data.json().then((data) => {
                        if (mounted) {
                            setData(data.results);
                        }
                    });
                }
            }).catch((e) => {
                setError(e);
            });
        //this is here to avoid setting state when the component is not mounted
        return function cleanup() {
            mounted = false;
        };
    }, [url]);

    return { data, error };
};
