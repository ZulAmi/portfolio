import { useEffect, useRef } from 'react';

const useScrollAnimation = () => {
    const elementRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const element = elementRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight && rect.bottom > 0) {
                    element.classList.add('animate');
                } else {
                    element.classList.remove('animate');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return elementRef;
};

export default useScrollAnimation;