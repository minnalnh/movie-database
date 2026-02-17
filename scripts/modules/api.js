export async function fetchRecommendedMovies() {
    const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
    return await response.json();
}

export async function fetchOmdbApi() {
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=52ddd3cb');
    return await response.json();
}