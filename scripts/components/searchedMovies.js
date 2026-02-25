import { fetchMovieSearch } from '../modules/api.js';
import { getElement } from '../utils/domUtils.js';
// import { likeBtnToggle } from '../modules/gui.js';
import { createMovieItem } from './createMovieItem.js';

searchedMovies();

export async function searchedMovies() {
    const queryStr = window.location.search;
    const searchStr = queryStr.substring(19);
    const movies = await fetchMovieSearch(searchStr);

    if(movies !== undefined) { // denna if-sats ska inte behövas, kolla på detta vid ett senare tillfälle
        for(let movie of movies) {
            const movieSectionRef = getElement('#movieSection');
            const movieRef = createMovieItem(movie);
            movieSectionRef.appendChild(movieRef);
            console.log('funkar');
        }
    }

    // likeBtnToggle();

}