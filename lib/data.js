export async function getData()
{
    let p = new Promise((resolve, reject) => {
        let a = 1 + 1; 

        if(a == 2)
        {
            resolve("Success");
        } else {
            reject("Failed")
        }
    }); 

    const data = p.then((message) => {
        console.log(message);
    });

    return await data; 
    
    
}