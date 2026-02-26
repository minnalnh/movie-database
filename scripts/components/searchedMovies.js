import { fetchMovieSearch } from '../modules/api.js';
import { getElement } from '../utils/domUtils.js';
import { createMovieItem } from './createMovieItem.js';

searchedMovies();

// tar fram filmer som matchar sökningen på search.html
export async function searchedMovies() {
    const queryStr = window.location.search;
    const searchStr = queryStr.substring(3);
    const movies = await fetchMovieSearch(searchStr);
    console.log(searchStr);

    if(movies !== undefined) {
        for(let movie of movies) {
            const movieSectionRef = getElement('#movieSection');
            const movieRef = createMovieItem(movie);
            movieSectionRef.appendChild(movieRef);
        }
    }
}