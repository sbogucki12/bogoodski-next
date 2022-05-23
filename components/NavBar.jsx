import { useState } from "react";
import DarkTheme from "./DarkTheme";

const NavBar = () => {

    const [darkMode, setDarkMode] = useState(false);

    const buttonLabel = darkMode ? "Light Mode" : "Dark Mode";

    return (
        <nav id="navbar-container">
            <h1>NavBar</h1>
            <button onClick={() => setDarkMode(!darkMode)}>{buttonLabel}</button>
            <style jsx>{`
                #navbar-container {
                    width: 100vw; 
                    background-color: red;              
                }
            `}</style>
            {darkMode && (
                <DarkTheme />
            )}

        </nav >
    )
};

export default NavBar; 
