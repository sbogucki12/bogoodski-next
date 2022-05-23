import '../styles/globals.css';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const App = ({Component, pageProps}) => 
{
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>
            <NavBar />
            <header>
                <h3>
                    Header
                </h3>
            </header>
            <Component {...pageProps} />
            <style jsx>{`
                h3 {
                    color: red;
                }
            `}</style>
        </>
    )
};

export default App; 