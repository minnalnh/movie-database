import { searchSetup } from './searchSetup.js';

const apiKey = '52ddd3cb';

export async function fetchRecommendedMovies() {
    const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
    return await response.json();
}

export async function fetchMovieSearch(searchInput) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`);
    const data = await response.json();
    if(data.Response === 'True') return data.Search;
}
/*

fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`)
    .then(response => response.json())
    .then(data => {
    if(data.Response === 'True') return data.Search;
});
*/
export async function fetchMovieData() {
    const queryStr = window.location.search;
    const imdbID = queryStr.substring(29);

    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&plot=full&i=${imdbID}`);
    return await response.json();
}

// bred sökning:
// GET http://www.omdbapi.com/?apikey=[yourkey]&s=[söksträng]

// specifik sökning:
// GET http://www.omdbapi.com/?apikey=[yourkey]&plot=full&i=[imdb-ID]
