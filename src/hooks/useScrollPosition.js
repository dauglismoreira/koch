'use client'

import {useEffect, useState} from "react";

export default function useScrollPosition(elementId = '') {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolledToElement, setIsScrolledToElement] = useState(false);
    const [isTopPage, setIsTopPage] = useState(false);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);

        const elementToCheck = document.getElementById(elementId);
        if (elementToCheck) {
            const elementRect = elementToCheck.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if ((elementRect.top - 300) <= (windowHeight) / 2) {
                setIsScrolledToElement(true);
            } else {
                setIsScrolledToElement(false);
            }
        }
    };

    useEffect(() => {
        setIsTopPage(window.scrollY > 0)

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {scrollPosition, isScrolledToElement, isTopPage};
}
