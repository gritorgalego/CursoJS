function promise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Opa, sou a promise');
            resolve();
        }, 2000);
    });
}

export default async function (){
    await promise();
    console.log("Terminou");
}