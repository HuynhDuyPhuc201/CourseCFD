import { useEffect, useState } from 'react';

const useQuery = (callbackPromise, deps) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        callbackPromise()
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, deps);

    return {
        data,
        loading,
        error,
    };
};

export default useQuery;
