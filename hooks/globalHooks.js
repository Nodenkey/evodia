import React, {useCallback} from 'react';

export const useGlobalHooks = () => {
    const checkClick = useCallback((e, elementClass, closeFunc) => {
        if (e.target && e.target.parentElement) {
            if (
                !(
                    e.target.classList.contains(elementClass) ||
                    e.target.parentElement.classList.contains(elementClass)
                )
            ) {
                closeFunc();
            }
        }
    }, []);

    const hideDropDownOnClick = (elementClass, closeFunc) => {
        if (typeof window !== "undefined") {
            window.addEventListener('click', e => {
                checkClick(e, elementClass, closeFunc);
            });
        }
    };
    return {hideDropDownOnClick}
};

