/*
network call
http/https
async call
promise -> then / catch

*/
makeNetCall("https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json");
async function makeNetCall(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log('data is ', data);
        return data;
    } //ES6-2015 wrapper method of XML http request
    catch (err) {
        console.log('eroor is ',err);
        throw err;
    }

}

export default makeNetCall;