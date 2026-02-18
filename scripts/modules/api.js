export async function fetchRecommendedMovies() {
    const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
    return await response.json();
}
/*
export async function fetchMovieSearch() {
    const response = await fetch(`http://www.omdbapi.com/?apikey=52ddd3cb&s=${}`); // lägg in variabel
    return await response.json();
}
*/
export async function fetchMovieData() {
    const response = await fetch(`http://www.omdbapi.com/?apikey=52ddd3cb&plot=full&i=${movie.imdbID}`);
    return await response.json();
}

// bred sökning:
// GET http://www.omdbapi.com/?apikey=[yourkey]&s=[söksträng]

// specifik sökning:
// GET http://www.omdbapi.com/?apikey=[yourkey]&plot=full&i=[imdb-ID]
