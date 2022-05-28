import { getData } from "../../../lib/data";


const MarkdownTest = (props) => {
    return (
        <>
            <h1>Test</h1>
            <div><button onClick={() => getData()}>Test GetData</button></div>
            <div><i>Click, and check console.</i></div>
            <p>Will test markdown here.</p>
        </>
    )
}; 

export default MarkdownTest;