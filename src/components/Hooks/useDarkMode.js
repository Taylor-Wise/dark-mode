import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";


const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key);

    useEffect(() => {
        if(darkMode){
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    }, [darkMode]);



    return [darkMode, setDarkMode]
}

export default useDarkMode;