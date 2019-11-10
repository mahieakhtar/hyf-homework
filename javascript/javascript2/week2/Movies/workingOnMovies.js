

const myModule = require('./movies');
let movies = myModule.fetchMovies(); // val is "Hello"   

//Create an array of movies containing the movies with a short title

const shortMovieTitles = movies.filter(movie => {
  let movTitle = movie.title.split(" ");
  if (movTitle.length == 1) {
    return movie;
  }
});
console.log("The short movie titles are:" + shortMovieTitles);

//Create an array of movie titles with long movie titles

const longMovieTitles = movies.filter(movie => {
  let movTitle = movie.title.split(" ");
  if (movTitle.length > 13) {
    return movie;
  }
});
console.log("Long Movie titles are:" + longMovieTitles);

//Count the number of movies made between 1980-1989

const numberOfMovies = movies.filter(movie => {
  if (movie.year >= 1980 && movie.year <= 1989) {
    return movie;
  }
});
console.log("Number of movies between 1980 - 1989 : " + numberOfMovies.length);

//Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const tag = movies.map(movie => {
  if (movie.rating >= 7) {
    movie.tag = "Good";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    movie.tag = "Average";
  } else if (movie.rating < 4) {
    movie.tag = "Bad";
  }
  return movie;
});
console.log(tag);

//Using chaining, first filter the movies array to only contain the movies rated higher than 6. 
//Now map the movies array to only the rating of the movies

const moviesArray = movies
  .filter(movie => movie.rating > 6)
  .map(movie => movie.rating);
console.log(moviesArray);

//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin

const totalNumberOfMovies = movies
  .filter(movie => {
    // if( movie.title.toLowerCase().includes("alien") || movie.title.toLowerCase().includes("suffer") || movie.title.toLowerCase().includes("benjamin"))  
    if (movie.title.toLowerCase().includes('Alien'.toLowerCase()) || movie.title.toLowerCase().includes('Suffer'.toLowerCase()) || movie.title.toLowerCase().includes('Benjamin'.toLowerCase()))
      return movie;
  });
console.log("Total number of movies:" + totalNumberOfMovies.length);


//Create an array of movies where a word in the title is duplicated.

const moviesWithTitle = movies.filter(movie => {
  let movieTitleArray = movie.title.split(" ");
  if (!checkIfArrayIsUnique(movieTitleArray))
    return movie;
});
console.log(moviesWithTitle);
function checkIfArrayIsUnique(myArray) {
  return myArray.length === new Set(myArray).size;

}

//Find the word that is mostly duplicated using sort Optional
const moviesWithTitles = movies.filter(movie => {
  let movieTitlesArray = movie.title.split(" ");
  let sortedContent = movieTitlesArray.slice().sort();
  if (checkArrayContainsDuplicate(sortedContent)) {
    //word mostly duplicated
    repeatedWord(sortedContent);
    return movie;
  }
});
console.log(moviesWithTitles);


function checkArrayContainsDuplicate(arrayContent) {
  for (var i = 0; i < arrayContent.length; i++) {
    for (var j = 0; j < arrayContent.length; j++) {
      if (i != j) {
        if (arrayContent[i] == arrayContent[j]) {
          return true; // means there are duplicate values
        }
      }
    }
  }
  return false;
}


function repeatedWord(sortedContent) {
  let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < sortedContent.length; i++) {
    for (let j = i; j < sortedContent.length; j++) {
      if (sortedContent[i] == sortedContent[j])
        m++;
      if (mf < m) {
        mf = m;
        item = sortedContent[i];
      }
    }
    m = 0;
  }
  console.log("Repeated Words : " + item + " ( " + mf + " times ) ");
}

//Calculate the average rating of all the movies using reduce

const averageRatingOfAllMovies =
  movies.reduce((total, movie) => {
    total += movie.rating;
    return total;
  }, 0) / movies.length;
console.log("The average rating of all the movies:" + averageRatingOfAllMovies);

//Count the total number of Good, Average and Bad movies using reduce

const goodMovies = movies.reduce((total, movie) => {
  if (movie.tag === 'Good') {
    total += 1;
  }
  return total;
}, 0);
console.log("The total number of Good movies : " + goodMovies);

const averageMovies =
  movies.reduce((total, movie) => {
    if (movie.tag === 'Average') {
      total += 1;
    }
    return total;
  }, 0);

console.log("The total number of Average movies : " + averageMovies);
const badMovies =
  movies.reduce((total, movie) => {
    if (movie.tag === 'Bad') {
      total += 1;
    }
    return total;
  }, 0);
console.log("The total number of Bad movies : " + badMovies);

let sorted_movies = movies.slice().sort();
let results = [];
for (let i = 0; i < sorted_movies.length - 1; i++) {
  if (sorted_movies[i + 1] == sorted_movies[i]) {
    results.push(sorted_movies[i]);
  }
}

console.log(results);