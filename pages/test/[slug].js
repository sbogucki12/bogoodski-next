export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { slug: 'test1'}
            }
        ], fallback: false,
    }
};

export async function getStaticProps() {

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