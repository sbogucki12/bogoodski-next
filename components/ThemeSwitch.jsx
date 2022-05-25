import DarkTheme from "./DarkTheme";
import { useState } from "react";

function getDarkMode() {
    if(typeof localStorage == 'undefined'){
        return false;
    };

    const value = localStorage.getItem('darkMode');

    if(value == null)
    {
        return false;
    }

    return JSON.parse(value);
}


const ThemeSwitch = () => {
        /*
    FYI - DarkTheme = 
    <style global jsx>{`
                    :root {
                        --background-color: black; 
                        --text-color: white; 
                        --link-color: red; 
                    }
                `}</style>
    */

    //when useState = true, DarkTheme will override the global styles
    //by updating the css variables in the :root element.  
    
    //get the original state from localStorage
    //localStorage will have a null value if user has not used toggle yet

        
    const [darkMode, setDarkMode] = useState(getDarkMode);
    
    const handleClick = () => {        
        localStorage.setItem('darkMode', JSON.stringify(!darkMode))
        setDarkMode(!darkMode);
    }

    const buttonLabel = darkMode ? "Light Mode" : "Dark Mode";


    return (
        <>            
            <button onClick={handleClick} suppressHydrationWarning>{buttonLabel}</button> 
            {darkMode && (
                <DarkTheme />
            )}
        </ >)
}

export default ThemeSwitch;
