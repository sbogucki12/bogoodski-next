const App = ({Component, pageProps}) => 
{
    return (
        <div>
            <header>
                <h3>
                    Header
                </h3>
            </header>
            <Component {...pageProps} />
        </div>
    )
};

export default App; 