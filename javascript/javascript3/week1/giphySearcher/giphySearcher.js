
async function setup() {
    let apiKey = '8Z83DoNxjr9BUrHOrEt2xr4ZYFxodA6Z'
    let searchText = document.getElementById('input-word').value;
    let numberOfGif = document.getElementById('input-number').value;

    let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=${apiKey}&limit=${numberOfGif}`;

    const response = await fetch(giphyAPI);
    const json = await response.json();

    console.log(json.data[0].images.original.url);

    let contentGif = "";
    for (let i = 0; i < numberOfGif; i++) {
        contentGif += '<center><img src = "' + json.data[i].images.original.url + '"  title="GIF via Giphy"></center>';
    }
    document.getElementById("here_is_gif").innerHTML = contentGif;
};

document.getElementById('btn').addEventListener("click", setup);
