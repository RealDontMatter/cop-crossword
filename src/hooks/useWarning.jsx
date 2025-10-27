import {useRef, useState} from "react";

export function useWarning(onSuccess){
    const [warningVisible, setWarningVisible] = useState(false);

    function handleClick() {
        if(warningVisible){
            onSuccess();
        }
        else {
            setWarningVisible(true);
        }
    }

    return [warningVisible, handleClick]

}