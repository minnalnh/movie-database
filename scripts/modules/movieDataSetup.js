import { fetchMovieData } from './api.js';

export async function movieDataSetup(event, movie) {
    console.log(event.target);

    if(event.target === movie) {
        console.log('funkar');
        location.href = `http://www.omdbapi.com/?apikey=52ddd3cb&plot=full&i=${movie.imdbID}`;
    }
    //const movieData = await fetchMovieData(movie);

    //location.href = movieData;
    
    //location.href = `movie.html?apikey=52ddd3cb&plot=full&i=${movie.imdbID}`;
}