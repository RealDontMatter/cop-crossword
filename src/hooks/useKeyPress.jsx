import {useCallback, useEffect} from "react";

export function useKeyPress(key, callback) {

    const handleKeyPress = useCallback((event) => {
        if(event.key === key){
            callback();
        }
    }, [key, callback])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

}