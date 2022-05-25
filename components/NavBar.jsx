
import DarkTheme from "./DarkTheme";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {

    return (
        <nav id="navbar-container">
            <ThemeSwitch />
            <h1>NavBar</h1>
            <style jsx>{`
                #navbar-container {
                    width: 100vw; 
                    background-color: red;              
                }
            `}</style>
        </nav >
    )
};

export default NavBar; 
