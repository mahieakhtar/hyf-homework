//Fetching and waiting(Only using promises)
//1.Fetch some data from an api.
const url = 'https://dog.ceo/api/breeds/image/random';
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //2.After that data has been fetched, wait 3 seconds

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(data);
            }, 3000)
        });
    })

    //3.Log out the data from the api    
    .then(data => {
        console.log(data.message);
    });
