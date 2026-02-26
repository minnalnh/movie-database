export async function fetchRecommendedMovies() {
    const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
    return await response.json();
}

export async function fetchMovieSearch(searchInput) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=52ddd3cb&s=${searchInput}`);
    const data = await response.json();
    if(data.Response === 'True') return data.Search;
}

export async function fetchMovieData() {
    // fick hjälp av ChatGPT att använda denna metod i stället för den som är bortkommenterad
    const params = new URLSearchParams(window.location.search);
    const imdbID = params.get('i');
    // const queryStr = window.location.search;
    // const imdbID = queryStr.substring(29);

    const response = await fetch(`http://www.omdbapi.com/?apikey=52ddd3cb&plot=full&i=${imdbID}`);
    return await response.json();
}