import Head from "next/head";
import Home from "../components/Home";

function index() {
    return (
        <>
            <Head>
                <title>BOGOODSKI</title>
            </Head>
            <main>
                <Home />
            </main>
        </>

    )
}

export default index; 
