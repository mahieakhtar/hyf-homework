const base_Url =
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
//1.Create an array of bad movies
fetch(base_Url)
    .then(response => response.json())
    .then(movies => {
        console.log(movies);
        const badMovies = movies.filter(movie => movie.rating <= 2)
        console.log(badMovies);
        return badMovies;
    })
    //2.Create an array of bad movies since year 2000
    .then(movies => {
        const badMoviesSinceYear2000 = movies.filter(movie => movie.year >= 2000)
        console.log(badMoviesSinceYear2000);
        return badMoviesSinceYear2000;
    })
    //3.Create an array of the titles of the bad movies since year 2000
    .then(movies => {
        const titlesOfBadMoviesSinceYear2000 = movies.map(movie => movie.title)
        console.log(titlesOfBadMoviesSinceYear2000);
        return titlesOfBadMoviesSinceYear2000;
    })
