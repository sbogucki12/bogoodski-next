export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { slug: 'test'}
            }
        ], fallback: false,
    }
};

export async function getStaticProps({params: {slug}}) {
    console.log(`context from getStaticProps: ${slug}`);
    return {
        props: {
            title: "test"
        }
    }
}

function TestPage ({ title }) {

    return (
        <>
            <h1>
                { title }
            </h1>
        </>
    )
}; 

export default TestPage; 