import { useEffect } from 'react';

const useScrollTop = (deps) => {
    useEffect(() => {
        console.log('scroll');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [deps]);
};

export default useScrollTop;
