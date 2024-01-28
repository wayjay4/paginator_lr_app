import {useEffect} from "react";

function useIntersect(ref, callback, options={}) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                callback();
            }
        });
    }, {
        rootMargin: '0px 0px 250px 0px'
    });

    useEffect(() => {
        observer.observe(ref.current);

        // Cleanup function
        return () => {
            observer.disconnect();
        };
    });
}

export default useIntersect;
